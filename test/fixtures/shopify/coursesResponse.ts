import type { AllShopifyCourseData } from "~/models/courses.server";

export const coursesShopifyResponse: { data: AllShopifyCourseData } = {
  data: {
    products: {
      edges: [
        {
          node: {
            id: "gid://shopify/Product/123",
            title: "Hatha Yoga - 15/03/2025 à 09:00",
            description: "60 min - Cours de hatha yoga pour tous niveaux",
            productType: "online",
            variants: {
              edges: [
                {
                  node: {
                    id: "gid://shopify/ProductVariant/456",
                    priceV2: { amount: "25" },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/124",
            title: "Vinyasa - 20/03/2025 à 18:30",
            description: "75 min - Vinyasa flow dynamique",
            productType: "studio",
            variants: {
              edges: [
                {
                  node: {
                    id: "gid://shopify/ProductVariant/457",
                    priceV2: { amount: "30" },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/125",
            title: "Abonnement Mars - 03/2025",
            description: "Abonnement mensuel cours en ligne",
            productType: "online",
            variants: {
              edges: [
                {
                  node: {
                    id: "gid://shopify/ProductVariant/458",
                    priceV2: { amount: "80" },
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
