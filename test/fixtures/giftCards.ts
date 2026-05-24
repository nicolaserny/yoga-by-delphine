import type { GiftCardType } from "~/models/giftCards.server";

export const giftCardsFixture: GiftCardType[] = [
  {
    shopifyId: "gid://shopify/ProductVariant/201",
    title: "Carte cadeau",
    description: "Offrez un moment de bien-être",
    price: 25,
  },
  {
    shopifyId: "gid://shopify/ProductVariant/202",
    title: "Carte cadeau",
    description: "Offrez un moment de bien-être",
    price: 50,
  },
  {
    shopifyId: "gid://shopify/ProductVariant/203",
    title: "Carte cadeau",
    description: "Offrez un moment de bien-être",
    price: 100,
  },
];
