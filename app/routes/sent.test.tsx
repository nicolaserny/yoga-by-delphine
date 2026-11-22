import SentRoute from "./sent";
import { render, screen } from "~/../test/test-utils";

describe("SentRoute", () => {
  it("renders the confirmation message", async () => {
    render(<SentRoute />, { path: "/sent" });
    expect(
      await screen.findByRole("heading", { name: /merci pour le message/i }),
    ).toBeVisible();
    expect(screen.getByText(/dès que possible/i)).toBeVisible();
  });

  it("lists the next steps", () => {
    render(<SentRoute />, { path: "/sent" });
    expect(
      screen.getByRole("heading", { name: /et maintenant/i }),
    ).toBeVisible();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("links to the home page, the schedule, videos and gift cards", () => {
    render(<SentRoute />, { path: "/sent" });
    expect(
      screen.getByRole("link", { name: /retour à l'accueil/i }),
    ).toHaveAttribute("href", "/");
    expect(
      screen.getByRole("link", { name: /voir le programme/i }),
    ).toHaveAttribute("href", "/schedule");
    expect(
      screen.getByRole("link", { name: /vidéos de yoga/i }),
    ).toHaveAttribute("href", "/videos");
    expect(
      screen.getByRole("link", { name: /cartes-cadeaux/i }),
    ).toHaveAttribute("href", "/gift-cards");
  });
});
