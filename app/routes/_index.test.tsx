import Index from "./_index";
import { render, screen } from "~/../test/test-utils";

describe("Index", () => {
  it("renders the landing heading and primary call to action", async () => {
    render(<Index />, { path: "/" });
    expect(
      await screen.findByRole("heading", {
        name: /le yoga qui vous fait bouger, respirer et briller/i,
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: /réserver votre cours/i }),
    ).toBeVisible();
  });
});
