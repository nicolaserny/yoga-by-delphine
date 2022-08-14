import type { Handler } from "@netlify/functions";
import { builder } from "@netlify/functions";
import type { ShopifyEdges } from "./shopify";
import { postToShopify } from "./shopify";

type AllShopifyGiftCardData = {
  products: ShopifyEdges<{
    id: string;
    title: string;
    description: string;
    variants: ShopifyEdges<{ priceV2: { amount: string }; id: string }>;
  }>;
};

type GiftCard = {
  shopifyId: string;
  title: string;
  description: string;
  price: number;
};

const giftCardsHandler: Handler = async () => {
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
  });
  let giftcards = [] as Array<GiftCard>;
  if (giftCardsResponse?.products) {
    giftcards = giftCardsResponse.products.edges.flatMap((card) => {
      return card.node.variants.edges.map((variant) => ({
        shopifyId: variant.node.id,
        title: card.node.title,
        description: card.node.description,
        price: parseInt(variant.node.priceV2.amount),
      }));
    });
  }
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(giftcards),
    ttl: 300,
  };
};

const handler = builder(giftCardsHandler);

export { handler };
