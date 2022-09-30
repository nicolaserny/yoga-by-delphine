import type { Handler } from "@netlify/functions";
import { parse } from "querystring";
import { postToAdminShopify } from "./shopify";
import invariant from "tiny-invariant";

type ShopifyDraftOrder = {
  draftOrderCreate: { draftOrder: { id: string; invoiceUrl: string } };
};

type ShopifyDraftOrderInput = {
  input: { lineItems: Array<{ variantId: string; quantity: number }> };
};

const handler: Handler = async (event) => {
  invariant(event.body, "The body is required");
  const { shopifyId } = parse(event.body);
  invariant(typeof shopifyId === "string", "The shopifyId is required");

  try {
    const response = await postToAdminShopify<
      ShopifyDraftOrder,
      ShopifyDraftOrderInput
    >({
      query: `
      mutation draftOrderCreate($input: DraftOrderInput!) {
        draftOrderCreate(input: $input) {
          draftOrder {
            id
            invoiceUrl
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

    if (!response?.draftOrderCreate.draftOrder.invoiceUrl) {
      throw new Error("No checkout URL returned");
    }

    return {
      statusCode: 301,
      headers: {
        Location: response.draftOrderCreate.draftOrder.invoiceUrl,
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
