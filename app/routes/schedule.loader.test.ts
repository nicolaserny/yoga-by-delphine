import { loader } from "./schedule";
import { coursesFixture } from "~/../test/fixtures/courses";
import { errorHandlers } from "~/../test/mocks/handlers";
import { server } from "~/../test/mocks/server";
import { createLoaderArgs } from "~/../test/utils/createDataFunctionArgs";

describe("schedule loader", () => {
  it("returns courses parsed from Shopify API matching the shared fixture", async () => {
    const result = await loader(
      createLoaderArgs(new Request("http://localhost/schedule"), {
        context: { ip: "127.0.0.1" },
      }),
    );

    expect(result).toEqual(coursesFixture);
  });

  it("returns empty array when API returns errors", async () => {
    server.use(...errorHandlers);

    const result = await loader(
      createLoaderArgs(new Request("http://localhost/schedule"), {
        context: { ip: "127.0.0.1" },
      }),
    );

    expect(result).toEqual([]);
  });
});
