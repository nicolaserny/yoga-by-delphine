import { postToShopify } from "~/utils/shopify.server";

type ShopifyCheckout = {
  checkoutCreate: { checkout: { id: string; webUrl: string } };
};

type ShopifyCheckoutInput = {
  input: { lineItems: Array<{ variantId: string; quantity: number }> };
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

    return response?.checkoutCreate.checkout.webUrl;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
