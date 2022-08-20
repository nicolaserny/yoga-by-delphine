import { getSiteUrl } from "~/utils/misc.server";

export type GiftCardType = {
  shopifyId: string;
  title: string;
  description: string;
  price: number;
};

export async function getGiftCardsFromApi(): Promise<Array<GiftCardType>> {
  const url = getSiteUrl();
  const response = await fetch(`${url}/api/gift-cards`);
  if (!response.ok) {
    return [];
  }
  return await response.json();
}
