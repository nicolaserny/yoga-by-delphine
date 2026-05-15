import ContactRoute from "./contact";
import { render, screen, userEvent } from "~/../test/test-utils";

describe("ContactRoute", () => {
  it("renders the page title", async () => {
    render(<ContactRoute />, { path: "/contact" });
    expect(
      await screen.findByRole("heading", { name: /me contacter/i }),
    ).toBeVisible();
  });

  it("renders the contact form with accessible labels", async () => {
    render(<ContactRoute />, { path: "/contact" });
    await screen.findByRole("heading", { name: /me contacter/i });
    expect(screen.getByLabelText("Prénom")).toBeVisible();
    expect(screen.getByLabelText("Nom")).toBeVisible();
    expect(screen.getByLabelText("Email")).toBeVisible();
    expect(screen.getByLabelText("Message")).toBeVisible();
  });

  it("has required fields", async () => {
    render(<ContactRoute />, { path: "/contact" });
    await screen.findByRole("heading", { name: /me contacter/i });
    expect(screen.getByLabelText("Prénom")).toBeRequired();
    expect(screen.getByLabelText("Nom")).toBeRequired();
    expect(screen.getByLabelText("Email")).toBeRequired();
    expect(screen.getByLabelText("Message")).toBeRequired();
  });

  it("has a submit button", async () => {
    render(<ContactRoute />, { path: "/contact" });
    expect(
      await screen.findByRole("button", { name: /envoyer/i }),
    ).toBeVisible();
  });

  it("accepts input in all fields", async () => {
    const user = userEvent.setup();
    render(<ContactRoute />, { path: "/contact" });
    await screen.findByRole("heading", { name: /me contacter/i });

    const firstName = screen.getByLabelText("Prénom");
    const lastName = screen.getByLabelText("Nom");
    const email = screen.getByLabelText("Email");
    const message = screen.getByLabelText("Message");

    await user.type(firstName, "Jean");
    await user.type(lastName, "Dupont");
    await user.type(email, "jean@example.com");
    await user.type(message, "Bonjour, j'ai une question.");

    expect(firstName).toHaveValue("Jean");
    expect(lastName).toHaveValue("Dupont");
    expect(email).toHaveValue("jean@example.com");
    expect(message).toHaveValue("Bonjour, j'ai une question.");
  });

  it("has the correct form name for Netlify", async () => {
    render(<ContactRoute />, { path: "/contact" });
    const form = await screen.findByRole("form");
    expect(form).toHaveAttribute("name", "contactme");
  });
});
