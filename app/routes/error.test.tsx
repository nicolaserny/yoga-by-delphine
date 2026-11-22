import ErrorRoute from "./error";
import { render, screen } from "~/../test/test-utils";

describe("ErrorRoute", () => {
  it("renders the error message", async () => {
    render(<ErrorRoute />, { path: "/error" });
    expect(await screen.findByText(/une erreur s'est produite/i)).toBeVisible();
    expect(
      screen.getByText(/veuillez réessayer ou contactez-moi/i),
    ).toBeVisible();
  });

  it("offers a way back home and to the contact page", async () => {
    render(<ErrorRoute />, { path: "/error" });
    expect(
      await screen.findByRole("link", { name: /retour à l'accueil/i }),
    ).toHaveAttribute("href", "/");
    expect(
      screen.getByRole("link", { name: /contacter delphine/i }),
    ).toHaveAttribute("href", "/contact");
  });
});
