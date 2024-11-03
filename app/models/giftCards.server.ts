import { type ShopifyEdges, postToShopify } from "~/utils/shopify.server";

export type GiftCardType = {
  shopifyId: string;
  title: string;
  description: string;
  price: number;
};

type AllShopifyGiftCardData = {
  products: ShopifyEdges<{
    id: string;
    title: string;
    description: string;
    variants: ShopifyEdges<{ priceV2: { amount: string }; id: string }>;
  }>;
};

export async function getGiftCardsFromApi(
  buyerIP?: string,
): Promise<Array<GiftCardType>> {
  const giftCardsResponse = await postToShopify<AllShopifyGiftCardData>({
    query: `
        query getGiftCards {
            products(first: 1, query: "product_type:Cartes-cadeaux") {    
                edges {
                    node {
                      id
                      title
                      description
                      variants(first: 10) {
                        edges {
                          node {
                            priceV2 {amount}
                            id                 
                          }
                        }
                       }
                     }
                 }
             }
        }
    `,
    buyerIP,
  });
  if (giftCardsResponse?.products) {
    const giftcards = giftCardsResponse.products.edges.flatMap((card) => {
      return card.node.variants.edges.map((variant) => ({
        shopifyId: variant.node.id,
        title: card.node.title,
        description: card.node.description,
        price: parseInt(variant.node.priceV2.amount),
      }));
    });
    return giftcards;
  }
  return [];
}
