import { postToShopify } from "~/utils/shopify.server";

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
