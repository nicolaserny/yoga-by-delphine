import { action } from "./api.checkout";
import { errorHandlers } from "~/../test/mocks/handlers";
import { server } from "~/../test/mocks/server";
import { createActionArgs } from "~/../test/utils/createDataFunctionArgs";

async function callActionAndExpectStatus(
  request: Request,
  expectedStatus: number,
) {
  try {
    await action(createActionArgs(request, { context: { ip: "127.0.0.1" } }));
    throw new Error("expected action to throw a Response");
  } catch (error) {
    expect(error).toBeInstanceOf(Response);
    expect((error as Response).status).toBe(expectedStatus);
  }
}

describe("api.checkout action", () => {
  it("redirects to checkout URL on success", async () => {
    const formData = new FormData();
    formData.append("shopifyId", "gid://shopify/ProductVariant/456");

    const request = new Request("http://localhost/api/checkout", {
      method: "POST",
      body: formData,
    });

    const response = await action(
      createActionArgs(request, { context: { ip: "127.0.0.1" } }),
    );

    expect(response.status).toBe(302);
    expect(response.headers.get("location")).toBe(
      "https://checkout.shopify.com/test-checkout?channel=headless-storefronts",
    );
  });

  it("throws a 400 Response when shopifyId is missing", async () => {
    const formData = new FormData();

    const request = new Request("http://localhost/api/checkout", {
      method: "POST",
      body: formData,
    });

    await callActionAndExpectStatus(request, 400);
  });

  it("throws a 400 Response when shopifyId is empty", async () => {
    const formData = new FormData();
    formData.append("shopifyId", "");

    const request = new Request("http://localhost/api/checkout", {
      method: "POST",
      body: formData,
    });

    await callActionAndExpectStatus(request, 400);
  });

  it("throws a 500 Response when the Shopify API fails", async () => {
    server.use(...errorHandlers);

    const formData = new FormData();
    formData.append("shopifyId", "gid://shopify/ProductVariant/456");

    const request = new Request("http://localhost/api/checkout", {
      method: "POST",
      body: formData,
    });

    await callActionAndExpectStatus(request, 500);
  });
});
