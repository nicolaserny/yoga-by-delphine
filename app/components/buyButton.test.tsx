import BuyButton from "./buyButton";
import { render, screen, userEvent } from "~/../test/test-utils";

describe("BuyButton", () => {
  it("renders the button with the provided label", async () => {
    render(
      <BuyButton shopifyId="gid://shopify/ProductVariant/123">
        Acheter
      </BuyButton>,
    );
    expect(
      await screen.findByRole("button", { name: /acheter/i }),
    ).toBeVisible();
  });

  it("shows loading state after click", async () => {
    const user = userEvent.setup();
    render(
      <BuyButton shopifyId="gid://shopify/ProductVariant/123">
        Acheter
      </BuyButton>,
      {
        extraRoutes: [
          { path: "/api/checkout", action: () => new Promise(() => {}) },
        ],
      },
    );
    await user.click(await screen.findByRole("button", { name: /acheter/i }));
    expect(await screen.findByText(/en cours/i)).toBeVisible();
  });
});
