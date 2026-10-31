import { loader } from "./gift-cards";
import { giftCardsFixture } from "~/../test/fixtures/giftCards";
import { errorHandlers } from "~/../test/mocks/handlers";
import { server } from "~/../test/mocks/server";
import { createLoaderArgs } from "~/../test/utils/createDataFunctionArgs";

describe("gift-cards loader", () => {
  it("returns gift cards parsed from Shopify API matching the shared fixture", async () => {
    const result = await loader(
      createLoaderArgs(new Request("http://localhost/gift-cards"), {
        ip: "127.0.0.1",
      }),
    );

    expect(result).toEqual(giftCardsFixture);
  });

  it("returns empty array when API returns errors", async () => {
    server.use(...errorHandlers);

    const result = await loader(
      createLoaderArgs(new Request("http://localhost/gift-cards"), {
        ip: "127.0.0.1",
      }),
    );

    expect(result).toEqual([]);
  });
});
