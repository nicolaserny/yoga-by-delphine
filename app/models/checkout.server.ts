import { postToAdminShopify, postToShopify } from "~/utils/shopify.server";

type ShopifyCheckout = {
  cartCreate: { cart: { id: string; checkoutUrl: string } };
};

type ShopifyCheckoutInput = {
  input: { lines: Array<{ merchandiseId: string; quantity: number }> };
};

export async function createCheckoutUrl({
  shopifyId,
  buyerIP,
}: {
  shopifyId: string;
  buyerIP?: string;
}) {
  try {
    const response = await postToShopify<ShopifyCheckout, ShopifyCheckoutInput>(
      {
        query: `
        mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
               id
               checkoutUrl
               lines(first: 5) {
                 edges {
                   node {
                     id
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
            lines: [{ merchandiseId: shopifyId, quantity: 1 }],
          },
        },
        buyerIP,
      },
    );
    return response?.cartCreate.cart.checkoutUrl;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

type ShopifyDraftOrder = {
  draftOrderCreate: { draftOrder: { id: string; invoiceUrl: string } };
};

type ShopifyDraftOrderInput = {
  input: { lineItems: Array<{ variantId: string; quantity: number }> };
};

export async function createDraftInvoice({
  shopifyId,
}: {
  shopifyId: string;
  buyerIP?: string;
}) {
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
    return response?.draftOrderCreate.draftOrder.invoiceUrl;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
