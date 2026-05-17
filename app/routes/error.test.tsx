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
});
