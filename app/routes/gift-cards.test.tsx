import GiftCardRoute from "./gift-cards";
import { giftCardsFixture } from "~/../test/fixtures/giftCards";
import { render, screen, userEvent, within } from "~/../test/test-utils";

const renderRoute = (loader: () => unknown = () => giftCardsFixture) =>
  render(<GiftCardRoute />, { path: "/gift-cards", loader });

describe("GiftCardRoute", () => {
  it("renders the page title", async () => {
    renderRoute();
    expect(
      await screen.findByRole("heading", { name: /offrez des cours de yoga/i }),
    ).toBeVisible();
  });

  it("renders one amount option per gift card", async () => {
    renderRoute();
    const group = within(
      await screen.findByRole("group", { name: /montant de la carte/i }),
    );
    for (const giftCard of giftCardsFixture) {
      expect(
        group.getByRole("button", { name: `${giftCard.price} €` }),
      ).toBeVisible();
    }
  });

  it("selects the middle amount by default and shows its details", async () => {
    renderRoute();
    const middle = giftCardsFixture[1];
    expect(
      await screen.findByRole("button", { name: `${middle.price} €` }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText(middle.description)).toBeVisible();
  });

  it("renders a single buy button for the selected gift card", async () => {
    renderRoute();
    const buttons = await screen.findAllByRole("button", { name: /acheter/i });
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveAccessibleName(
      `Acheter la carte cadeau de ${giftCardsFixture[1].price} €`,
    );
    const form = buttons[0].closest("form");
    expect(form).toHaveFormValues({ shopifyId: giftCardsFixture[1].shopifyId });
  });

  it("updates the buy button when another amount is selected", async () => {
    const user = userEvent.setup();
    renderRoute();
    const last = giftCardsFixture[giftCardsFixture.length - 1];

    await user.click(
      await screen.findByRole("button", { name: `${last.price} €` }),
    );

    expect(
      screen.getByRole("button", { name: `${last.price} €` }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("button", { name: `${giftCardsFixture[1].price} €` }),
    ).toHaveAttribute("aria-pressed", "false");
    const buy = screen.getByRole("button", { name: /acheter/i });
    expect(buy).toHaveAccessibleName(
      `Acheter la carte cadeau de ${last.price} €`,
    );
    expect(buy.closest("form")).toHaveFormValues({ shopifyId: last.shopifyId });
  });

  it("shows a contact message when no gift card is available", async () => {
    renderRoute(() => []);
    expect(
      await screen.findByText(/momentanément indisponibles/i),
    ).toBeVisible();
    expect(
      screen.queryByRole("button", { name: /acheter/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /contactez-moi/i }),
    ).toHaveLength(1);
    expect(
      screen.queryByRole("heading", { name: /comment ça marche/i }),
    ).not.toBeInTheDocument();
  });

  it("orders amounts by ascending price regardless of loader order", async () => {
    renderRoute(() => [...giftCardsFixture].reverse());
    const group = within(
      await screen.findByRole("group", { name: /montant de la carte/i }),
    );
    const labels = group.getAllByRole("button").map((b) => b.textContent);
    expect(labels).toEqual(
      [...giftCardsFixture]
        .sort((a, b) => a.price - b.price)
        .map((g) => `${g.price} €`),
    );
  });
});
