import { graphql, useStaticQuery } from "gatsby";

const useShopifyGiftCards = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct(filter: { productType: { eq: "Cartes-cadeaux" } }) {
        nodes {
          id
          title
          description
          variants {
            price
            shopifyId
          }
          productType
        }
      }
    }
  `);
  return data.allShopifyProduct.nodes.flatMap((card) => {
    return card.variants.map((variant) => ({
      shopifyId: variant.shopifyId,
      title: card.title,
      description: card.description,
      price: variant.price,
    }));
  });
};

export default useShopifyGiftCards;
