import { useStaticQuery, graphql } from "gatsby";

const useShopifyCourses = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        nodes {
          title
          description
          variants {
            price
          }
          shopifyId
          productType
        }
      }
    }
  `);
  const courses = data.allShopifyProduct.nodes
    .map((product) => {
      const titleElements = product.title.split("-");
      if (titleElements.length !== 2) {
        return false;
      }
      const yogaType = titleElements[0].trim();
      const dateElements = titleElements[1].split("@");
      if (dateElements.length !== 2) {
        return false;
      }
      const date = dateElements[0].trim();
      const time = dateElements[1].trim();
      const descriptionElements = product.description.split("-");
      const duration =
        descriptionElements.length === 2
          ? descriptionElements[0].trim()
          : undefined;
      const description = descriptionElements[
        descriptionElements.length === 2 ? 1 : 0
      ].trim();
      return {
        yogaType,
        date,
        time,
        duration,
        description,
        price: product.variants.price,
        category: product.productType,
        shopifyId: product.shopifyId,
      };
    })
    .filter((course) => !!course);
  return courses;
};

export default useShopifyCourses;
