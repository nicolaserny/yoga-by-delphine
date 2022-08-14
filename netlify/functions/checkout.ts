import type { Handler } from "@netlify/functions";
import { parse } from "querystring";
import { postToShopify } from "./shopify";
import invariant from "tiny-invariant";

const handler: Handler = async (event) => {
  invariant(event.body, "The body is required");
  const { shopifyId } = parse(event.body);

  try {
    const response = await postToShopify({
      query: `
        mutation checkoutCreate($input: CheckoutCreateInput!) {
          checkoutCreate(input: $input) {
            checkout {
               id
               webUrl
               lineItems(first: 5) {
                 edges {
                   node {
                     title
                     quantity
                   }
                 }
               }
            }
          }
        }
      `,
      variables: {
        input: {
          lineItems: [{ variantId: shopifyId, quantity: 1 }],
        },
      },
    });

    //TODO when error redirect to the error page
    if (!response.checkoutCreate.checkout.webUrl) {
      throw new Error("No checkout URL returned");
    }

    return {
      statusCode: 301,
      headers: {
        Location: response.checkoutCreate.checkout.webUrl,
      },
      body: "Redirecting to checkout...",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export { handler };
