import { useStaticQuery, graphql } from "gatsby";
import { parse } from "date-fns";
import fr from "date-fns/locale/fr";

const SubscriptionKeyword = "Abonnement";
const CardKeyword = "Carte";

export const CourseType = {
  REGULAR: "REGULAR",
  SUBSCRIPTION: "SUBSCRIPTION",
  CARD: "CARD",
};

const createSubscription = (product, yogaType, datetimeString) => {
  const datetimeSubscription = parse(datetimeString, "MM/yyyy", new Date(), {
    locale: fr,
  });

  return {
    id: product.id,
    type: CourseType.SUBSCRIPTION,
    title: yogaType,
    duration: undefined,
    description: product.description,
    datetime: datetimeSubscription,
    price: product.variants[0].price,
    category: product.productType,
    shopifyId: product.variants[0].shopifyId,
  };
};

const createCard = (product, yogaType, datetimeString) => {
  return {
    id: product.id,
    type: CourseType.CARD,
    title: yogaType,
    duration: undefined,
    description: product.description,
    datetime: datetimeString,
    price: product.variants[0].price,
    category: product.productType,
    shopifyId: product.variants[0].shopifyId,
  };
};

const createRegularCourse = (product, yogaType, datetimeString) => {
  const datetime = parse(datetimeString, "dd/MM/yyyy à HH:mm", new Date(), {
    locale: fr,
  });

  const descriptionElements = product.description.split("-");
  const duration =
    descriptionElements.length === 2
      ? descriptionElements[0].trim()
      : undefined;
  const description =
    descriptionElements[descriptionElements.length === 2 ? 1 : 0].trim();
  return {
    id: product.id,
    type: CourseType.REGULAR,
    title: yogaType,
    duration,
    description,
    datetime,
    price: product.variants[0].price,
    category: product.productType,
    shopifyId: product.variants[0].shopifyId,
  };
};

const getFactoryMethod = (yogaType) => {
  if (yogaType.startsWith(SubscriptionKeyword)) {
    return createSubscription;
  }
  if (yogaType.startsWith(CardKeyword)) {
    return createCard;
  }
  return createRegularCourse;
};

const useShopifyCourses = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct {
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

  const courses = data.allShopifyProduct.nodes
    .map((product) => {
      const titleElements = product.title.split("-");
      if (titleElements.length !== 2) {
        return false;
      }
      const yogaType = titleElements[0].trim();

      return getFactoryMethod(yogaType)(
        product,
        yogaType,
        titleElements[1].trim(),
      );
    })
    .filter((course) => !!course);
  return courses;
};

export default useShopifyCourses;
