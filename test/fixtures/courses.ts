import type { YogaProduct } from "~/models/courses.server";

export const coursesFixture: YogaProduct[] = [
  {
    id: "gid://shopify/Product/123",
    type: "REGULAR",
    title: "Hatha Yoga",
    duration: "60 min",
    description: "Cours de hatha yoga pour tous niveaux",
    datetime: "15/03/2025 à 09:00",
    price: 25,
    category: "online",
    shopifyId: "gid://shopify/ProductVariant/456",
  },
  {
    id: "gid://shopify/Product/124",
    type: "REGULAR",
    title: "Vinyasa",
    duration: "75 min",
    description: "Vinyasa flow dynamique",
    datetime: "20/03/2025 à 18:30",
    price: 30,
    category: "studio",
    shopifyId: "gid://shopify/ProductVariant/457",
  },
  {
    id: "gid://shopify/Product/125",
    type: "SUBSCRIPTION",
    title: "Abonnement Mars",
    duration: undefined,
    description: "Abonnement mensuel cours en ligne",
    datetime: "03/2025",
    price: 80,
    category: "online",
    shopifyId: "gid://shopify/ProductVariant/458",
  },
];
