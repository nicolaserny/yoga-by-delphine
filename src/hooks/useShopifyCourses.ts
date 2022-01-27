import { useStaticQuery, graphql } from "gatsby";
import { parse } from "date-fns";
import fr from "date-fns/locale/fr";

const SubscriptionKeyword = "Abonnement";
const CardKeyword = "Carte";

type CourseType = "REGULAR" | "SUBSCRIPTION" | "CARD";
export type CourseCategory = "online" | "studio" | "other_private";

export type YogaProduct = {
  id: string;
  type: CourseType;
  title: string;
  duration?: string;
  description: string;
  datetime: Date | string;
  price: string;
  category: CourseCategory;
  shopifyId: string;
};

type AllShopifyCourseQuery = {
  allShopifyProduct: {
    nodes: Array<ShopifyProduct>;
  };
};

type ShopifyProduct = {
  id: string;
  title: string;
  description: string;
  variants: Array<{ price: string; shopifyId: string }>;
  productType: CourseCategory;
};

function createSubscription(
  product: ShopifyProduct,
  yogaType: string,
  datetimeString: string,
) {
  const datetimeSubscription = parse(datetimeString, "MM/yyyy", new Date(), {
    locale: fr,
  });

  return {
    id: product.id,
    type: "SUBSCRIPTION",
    title: yogaType,
    duration: undefined,
    description: product.description,
    datetime: datetimeSubscription,
    price: product.variants[0].price,
    category: product.productType,
    shopifyId: product.variants[0].shopifyId,
  } as YogaProduct;
}

function createCard(
  product: ShopifyProduct,
  yogaType: string,
  datetimeString: string,
) {
  return {
    id: product.id,
    type: "CARD",
    title: yogaType,
    duration: undefined,
    description: product.description,
    datetime: datetimeString,
    price: product.variants[0].price,
    category: product.productType,
    shopifyId: product.variants[0].shopifyId,
  } as YogaProduct;
}

function createRegularCourse(
  product: ShopifyProduct,
  yogaType: string,
  datetimeString: string,
) {
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
    type: "REGULAR",
    title: yogaType,
    duration,
    description,
    datetime,
    price: product.variants[0].price,
    category: product.productType,
    shopifyId: product.variants[0].shopifyId,
  } as YogaProduct;
}

function getFactoryMethod(yogaType: string) {
  if (yogaType.startsWith(SubscriptionKeyword)) {
    return createSubscription;
  }
  if (yogaType.startsWith(CardKeyword)) {
    return createCard;
  }
  return createRegularCourse;
}

const useShopifyCourses = () => {
  const data = useStaticQuery<AllShopifyCourseQuery>(graphql`
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
        return undefined;
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
