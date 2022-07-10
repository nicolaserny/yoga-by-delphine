import { graphql, useStaticQuery } from "gatsby";

type AllShopifyGiftCardQuery = {
  giftCards: {
    nodes: Array<{
      id: string;
      title: string;
      description: string;
      variants: Array<{ price: string; shopifyId: string }>;
    }>;
  };
};

export type GiftCard = {
  shopifyId: string;
  price: string;
  title: string;
  description: string;
};

const useShopifyGiftCards = () => {
  const data = useStaticQuery<AllShopifyGiftCardQuery>(graphql`
    query {
      giftCards: allShopifyProduct(
        filter: { productType: { eq: "Cartes-cadeaux" } }
      ) {
        nodes {
          id
          title
          description
          variants {
            price
            shopifyId
          }
        }
      }
    }
  `);
  return data.giftCards.nodes.flatMap((card) => {
    return card.variants.map(
      (variant) =>
        ({
          shopifyId: variant.shopifyId,
          title: card.title,
          description: card.description,
          price: variant.price,
        } as GiftCard),
    );
  });
};

export default useShopifyGiftCards;
