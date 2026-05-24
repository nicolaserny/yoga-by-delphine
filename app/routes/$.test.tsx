import NotFoundPage from "./$";
import { render, screen } from "~/../test/test-utils";

describe("NotFoundPage", () => {
  it("renders the not-found message", async () => {
    render(<NotFoundPage />, { path: "/does-not-exist" });
    expect(await screen.findByText(/cette page n'existe pas/i)).toBeVisible();
  });
});
