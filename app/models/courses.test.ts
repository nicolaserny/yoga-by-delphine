import { http, HttpResponse } from "msw";
import { getCoursesFromApi } from "./courses.server";
import { errorHandlers } from "~/../test/mocks/handlers";
import { server } from "~/../test/mocks/server";

describe("getCoursesFromApi", () => {
  it("returns parsed courses from Shopify API", async () => {
    const result = await getCoursesFromApi("127.0.0.1");

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);

    const regular = result.find((c) => c.type === "REGULAR");
    expect(regular).toBeDefined();
    expect(regular?.title).toBe("Hatha Yoga");
    expect(regular?.duration).toBe("60 min");
    expect(regular?.price).toBe(25);
    expect(regular?.category).toBe("online");

    const subscription = result.find((c) => c.type === "SUBSCRIPTION");
    expect(subscription).toBeDefined();
    expect(subscription?.title).toBe("Abonnement Mars");
    expect(subscription?.price).toBe(80);
  });

  it("filters out products whose title has no '-' separator", async () => {
    server.use(
      http.post(
        "https://:shopName.myshopify.com/api/:version/graphql.json",
        () =>
          HttpResponse.json({
            data: {
              products: {
                edges: [
                  {
                    node: {
                      id: "gid://shopify/Product/999",
                      title: "Title without separator",
                      description: "60 min - description",
                      productType: "online",
                      variants: {
                        edges: [
                          {
                            node: {
                              id: "gid://shopify/ProductVariant/999",
                              priceV2: { amount: "25" },
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          }),
      ),
    );

    const result = await getCoursesFromApi("127.0.0.1");

    expect(result).toEqual([]);
  });

  it("falls back to CARD when an 'Abonnement' datetime is not a valid MM/yyyy", async () => {
    server.use(
      http.post(
        "https://:shopName.myshopify.com/api/:version/graphql.json",
        () =>
          HttpResponse.json({
            data: {
              products: {
                edges: [
                  {
                    node: {
                      id: "gid://shopify/Product/777",
                      title: "Abonnement Annuel - Toute l'année",
                      description: "Abonnement annuel cours en ligne",
                      productType: "online",
                      variants: {
                        edges: [
                          {
                            node: {
                              id: "gid://shopify/ProductVariant/777",
                              priceV2: { amount: "500" },
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          }),
      ),
    );

    const result = await getCoursesFromApi("127.0.0.1");

    expect(result.length).toBe(1);
    expect(result[0].type).toBe("CARD");
    expect(result[0].title).toBe("Abonnement Annuel");
    expect(result[0].datetime).toBe("Toute l'année");
  });

  it("returns empty array when API returns errors", async () => {
    server.use(...errorHandlers);

    const result = await getCoursesFromApi("127.0.0.1");

    expect(result).toEqual([]);
  });
});
