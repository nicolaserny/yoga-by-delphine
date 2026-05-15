import type { AllShopifyGiftCardData } from "~/models/giftCards.server";

export const giftCardsShopifyResponse: { data: AllShopifyGiftCardData } = {
  data: {
    products: {
      edges: [
        {
          node: {
            id: "gid://shopify/Product/200",
            title: "Carte cadeau",
            description: "Offrez un moment de bien-être",
            variants: {
              edges: [
                {
                  node: {
                    id: "gid://shopify/ProductVariant/201",
                    priceV2: { amount: "25" },
                  },
                },
                {
                  node: {
                    id: "gid://shopify/ProductVariant/202",
                    priceV2: { amount: "50" },
                  },
                },
                {
                  node: {
                    id: "gid://shopify/ProductVariant/203",
                    priceV2: { amount: "100" },
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
};
