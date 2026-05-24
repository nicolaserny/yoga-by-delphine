import GiftCardRoute from "./gift-cards";
import { giftCardsFixture } from "~/../test/fixtures/giftCards";
import { render, screen } from "~/../test/test-utils";

describe("GiftCardRoute", () => {
  it("renders the page title", async () => {
    render(<GiftCardRoute />, {
      path: "/gift-cards",
      loader: () => giftCardsFixture,
    });
    expect(
      await screen.findByRole("heading", { name: /offrez des cours de yoga/i }),
    ).toBeVisible();
  });

  it("renders gift cards with prices", async () => {
    render(<GiftCardRoute />, {
      path: "/gift-cards",
      loader: () => giftCardsFixture,
    });
    for (const giftCard of giftCardsFixture) {
      expect(await screen.findByText(String(giftCard.price))).toBeVisible();
    }
  });

  it("renders gift card descriptions", async () => {
    render(<GiftCardRoute />, {
      path: "/gift-cards",
      loader: () => giftCardsFixture,
    });
    const descriptions = await screen.findAllByText(
      "Offrez un moment de bien-être",
    );
    expect(descriptions.length).toBe(giftCardsFixture.length);
  });

  it("renders a buy button for each gift card", async () => {
    render(<GiftCardRoute />, {
      path: "/gift-cards",
      loader: () => giftCardsFixture,
    });
    const buttons = await screen.findAllByRole("button", { name: /acheter/i });
    expect(buttons.length).toBe(giftCardsFixture.length);
  });
});
