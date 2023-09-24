import { parse, isValid } from "date-fns";
import fr from "date-fns/locale/fr";
import { notNullOrUndefined } from "~/utils/misc";
import { postToShopify, type ShopifyEdges } from "~/utils/shopify.server";

export type CourseType = "REGULAR" | "SUBSCRIPTION" | "CARD";
export type CourseCategory =
  | "online"
  | "studio"
  | "other_private"
  | "other_subscription"
  | "park";

export type YogaProduct = {
  id: string;
  type: CourseType;
  title: string;
  duration?: string;
  description: string;
  datetime: Date | string;
  price: number;
  category: CourseCategory;
  shopifyId: string;
};

type ShopifyProduct = {
  id: string;
  title: string;
  description: string;
  productType: string;
  variants: ShopifyEdges<{ priceV2: { amount: string }; id: string }>;
};

type AllShopifyCourseData = {
  products: ShopifyEdges<ShopifyProduct>;
};

const SubscriptionKeyword = "Abonnement";
const CardKeyword = "Carte";

function createSubscription(
  product: ShopifyProduct,
  yogaType: string,
  datetimeString: string,
) {
  const datetimeSubscription = parse(datetimeString, "MM/yyyy", new Date(), {
    locale: fr,
  });
  if (isValid(datetimeSubscription)) {
    return {
      id: product.id,
      type: "SUBSCRIPTION",
      title: yogaType,
      duration: undefined,
      description: product.description,
      datetime: datetimeString,
      price: parseInt(product.variants.edges[0].node.priceV2.amount),
      category: product.productType,
      shopifyId: product.variants.edges[0].node.id,
    } as YogaProduct;
  }
  return createCard(product, yogaType, datetimeString);
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
    price: parseInt(product.variants.edges[0].node.priceV2.amount),
    category: product.productType,
    shopifyId: product.variants.edges[0].node.id,
  } as YogaProduct;
}

function createRegularCourse(
  product: ShopifyProduct,
  yogaType: string,
  datetimeString: string,
) {
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
    datetime: datetimeString,
    price: parseInt(product.variants.edges[0].node.priceV2.amount),
    category: product.productType,
    shopifyId: product.variants.edges[0].node.id,
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

type ShopifyCoursesInput = {
  sortKey: string;
};

export async function getCoursesFromApi(
  buyerIP?: string,
): Promise<Array<YogaProduct>> {
  const coursesResponse = await postToShopify<
    AllShopifyCourseData,
    ShopifyCoursesInput
  >({
    query: `
        query getCourses($sortKey: ProductSortKeys!) {
            products(first: 50, query: "NOT product_type:Cartes-cadeaux", sortKey: $sortKey, reverse: true) {
                edges {
                    node {
                      id
                      title
                      description
                      productType
                      variants(first: 3) {
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
    variables: {
      sortKey: "CREATED_AT",
    },
    buyerIP,
  });
  if (coursesResponse?.products) {
    const courses = coursesResponse.products.edges
      .map((product) => {
        const titleElements = product.node.title.split("-");
        if (titleElements.length !== 2) {
          return undefined;
        }
        const yogaType = titleElements[0].trim();

        return getFactoryMethod(yogaType)(
          product.node,
          yogaType,
          titleElements[1].trim(),
        );
      })
      .filter(notNullOrUndefined);
    return courses;
  }
  return [];
}
