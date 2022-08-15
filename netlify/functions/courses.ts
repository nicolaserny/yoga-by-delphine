import type { Handler } from "@netlify/functions";
import { builder } from "@netlify/functions";
import type { ShopifyEdges } from "./shopify";
import { postToShopify } from "./shopify";
import { parse, isValid } from "date-fns";
import fr from "date-fns/locale/fr";

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

type CourseType = "REGULAR" | "SUBSCRIPTION" | "CARD";
type CourseCategory =
  | "online"
  | "studio"
  | "other_private"
  | "other_subscription"
  | "park";

type YogaProduct = {
  id: string;
  type: CourseType;
  title: string;
  duration?: string;
  description: string;
  datetime: string;
  price: number;
  category: CourseCategory;
  shopifyId: string;
};

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

const coursesHandler: Handler = async () => {
  const coursesResponse = await postToShopify<
    AllShopifyCourseData,
    ShopifyCoursesInput
  >({
    query: `
        query getGiftCards($sortKey: ProductSortKeys!) {
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
      .filter((course) => course !== undefined);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courses),
      ttl: 300,
    };
  }
  return { statusCode: 404 };
};

const handler = builder(coursesHandler);

export { handler };
