import type { Handler } from "@netlify/functions";
import { parse } from "querystring";
import { postToShopify } from "./shopify";
import invariant from "tiny-invariant";

type ShopifyCheckout = {
  checkoutCreate: { checkout: { id: string; webUrl: string } };
};

type ShopifyCheckoutInput = {
  input: { lineItems: Array<{ variantId: string; quantity: number }> };
};

const handler: Handler = async (event) => {
  invariant(event.body, "The body is required");
  const { shopifyId } = parse(event.body);
  invariant(typeof shopifyId === "string", "The shopifyId is required");
  const buyerIP = event.headers["x-nf-client-connection-ip"];

  try {
    const response = await postToShopify<ShopifyCheckout, ShopifyCheckoutInput>(
      {
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
        buyerIP,
      },
    );

    if (!response?.checkoutCreate.checkout.webUrl) {
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
    console.error(error);
    return {
      statusCode: 301,
      headers: {
        Location: "/error",
      },
      body: "Redirecting to error page...",
    };
  }
};

export { handler };
