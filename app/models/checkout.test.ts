import { http, HttpResponse } from "msw";
import { createCheckoutUrl, createDraftInvoice } from "./checkout.server";
import { errorHandlers } from "~/../test/mocks/handlers";
import { server } from "~/../test/mocks/server";

describe("createCheckoutUrl", () => {
  it("appends the headless-storefronts channel parameter to the Shopify URL", async () => {
    const url = await createCheckoutUrl({
      shopifyId: "gid://shopify/ProductVariant/456",
      buyerIP: "127.0.0.1",
    });

    expect(url).toBe(
      "https://checkout.shopify.com/test-checkout?channel=headless-storefronts",
    );
  });

  it("returns undefined when the Shopify API returns errors", async () => {
    server.use(...errorHandlers);

    const url = await createCheckoutUrl({
      shopifyId: "gid://shopify/ProductVariant/456",
    });

    expect(url).toBeUndefined();
  });

  it("returns undefined when the Shopify response is missing the checkout URL", async () => {
    server.use(
      http.post(
        "https://:shopName.myshopify.com/api/:version/graphql.json",
        () =>
          HttpResponse.json({
            data: {
              cartCreate: {
                cart: {
                  id: "gid://shopify/Cart/empty",
                  checkoutUrl: "",
                },
              },
            },
          }),
      ),
    );

    const url = await createCheckoutUrl({
      shopifyId: "gid://shopify/ProductVariant/456",
    });

    expect(url).toBeUndefined();
  });
});

describe("createDraftInvoice", () => {
  it("returns the invoice URL from the admin API", async () => {
    const url = await createDraftInvoice({
      shopifyId: "gid://shopify/ProductVariant/456",
    });

    expect(url).toBe("https://checkout.shopify.com/draft-invoice");
  });

  it("returns undefined when the admin API returns errors", async () => {
    server.use(...errorHandlers);

    const url = await createDraftInvoice({
      shopifyId: "gid://shopify/ProductVariant/456",
    });

    expect(url).toBeUndefined();
  });
});
