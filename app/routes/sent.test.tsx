import SentRoute from "./sent";
import { render, screen } from "~/../test/test-utils";

describe("SentRoute", () => {
  it("renders the confirmation message", async () => {
    render(<SentRoute />, { path: "/sent" });
    expect(await screen.findByText(/merci pour le message/i)).toBeVisible();
    expect(screen.getByText(/je vous répondrai rapidement/i)).toBeVisible();
  });
});
