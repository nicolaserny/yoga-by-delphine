import { http, HttpResponse } from "msw";
import { coursesShopifyResponse } from "~/../test/fixtures/shopify/coursesResponse";
import { giftCardsShopifyResponse } from "~/../test/fixtures/shopify/giftCardsResponse";

export const handlers = [
  http.post(
    "https://:shopName.myshopify.com/api/:version/graphql.json",
    async ({ request }) => {
      const body = (await request.json()) as { query: string };
      const query = body.query;

      if (query.includes("getCourses")) {
        return HttpResponse.json(coursesShopifyResponse);
      }

      if (query.includes("getGiftCards")) {
        return HttpResponse.json(giftCardsShopifyResponse);
      }

      if (query.includes("cartCreate")) {
        return HttpResponse.json({
          data: {
            cartCreate: {
              cart: {
                id: "gid://shopify/Cart/test123",
                checkoutUrl: "https://checkout.shopify.com/test-checkout",
              },
            },
          },
        });
      }

      return HttpResponse.json({ data: null });
    },
  ),
  http.post(
    "https://:shopName.myshopify.com/admin/api/:version/graphql.json",
    async ({ request }) => {
      const body = (await request.json()) as { query: string };
      const query = body.query;

      if (query.includes("draftOrderCreate")) {
        return HttpResponse.json({
          data: {
            draftOrderCreate: {
              draftOrder: {
                id: "gid://shopify/DraftOrder/test456",
                invoiceUrl: "https://checkout.shopify.com/draft-invoice",
              },
            },
          },
        });
      }

      return HttpResponse.json({ data: null });
    },
  ),
];

export const errorHandlers = [
  http.post("https://:shopName.myshopify.com/api/:version/graphql.json", () => {
    return HttpResponse.json({
      errors: [{ message: "Internal server error" }],
    });
  }),
  http.post(
    "https://:shopName.myshopify.com/admin/api/:version/graphql.json",
    () => {
      return HttpResponse.json({
        errors: [{ message: "Internal server error" }],
      });
    },
  ),
];
