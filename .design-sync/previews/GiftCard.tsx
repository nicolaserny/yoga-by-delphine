import { GiftCard } from "yoga-by-delphine";

export const Default = () => (
  <GiftCard
    giftCard={{
      shopifyId: "gid://shopify/ProductVariant/123456789",
      title: "Carte cadeau — 5 cours",
      description: "Offrez 5 séances de yoga",
      price: 90,
    }}
  />
);

export const SingleClass = () => (
  <GiftCard
    giftCard={{
      shopifyId: "gid://shopify/ProductVariant/987654321",
      title: "Carte cadeau — 1 cours",
      description: "Une séance découverte à offrir",
      price: 20,
    }}
  />
);
