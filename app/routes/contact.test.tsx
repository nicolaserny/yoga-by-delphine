import { http, HttpResponse } from "msw";
import ContactRoute from "./contact";
import { server } from "~/../test/mocks/server";
import { render, screen, userEvent, waitFor } from "~/../test/test-utils";

async function fillForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Prénom"), "Jean");
  await user.type(screen.getByLabelText("Nom"), "Dupont");
  await user.type(screen.getByLabelText("Email"), "jean@example.com");
  await user.type(screen.getByLabelText("Message"), "Bonjour !");
}

describe("ContactRoute", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

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

  it("keeps the Netlify form structure", async () => {
    render(<ContactRoute />, { path: "/contact" });
    const form = await screen.findByRole("form");
    expect(form).toHaveAttribute("data-netlify", "true");
    expect(form).toHaveAttribute("netlify-honeypot", "bot-field");
    expect(form).toHaveAttribute("method", "POST");
    expect(form).toHaveAttribute("action", "/sent");
    expect(form.querySelector('input[name="form-name"]')).toHaveValue(
      "contactme",
    );
    expect(form.querySelector('input[name="bot-field"]')).toBeInTheDocument();
  });

  it("limits the message to 500 characters", async () => {
    render(<ContactRoute />, { path: "/contact" });
    expect(await screen.findByLabelText("Message")).toHaveAttribute(
      "maxlength",
      "500",
    );
    expect(screen.getByText(/max\. 500 caractères/i)).toBeVisible();
  });

  it("submits the form to Netlify and redirects to the confirmation page", async () => {
    const user = userEvent.setup();
    let body = "";
    server.use(
      http.post("*/favicon-32x32.png", async ({ request }) => {
        body = await request.text();
        return new HttpResponse(null, { status: 200 });
      }),
    );
    render(<ContactRoute />, {
      path: "/contact",
      extraRoutes: [{ path: "/sent", Component: () => <p>Message envoyé</p> }],
    });
    await screen.findByRole("heading", { name: /me contacter/i });

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /envoyer/i }));

    expect(await screen.findByText("Message envoyé")).toBeVisible();
    const params = new URLSearchParams(body);
    expect(params.get("form-name")).toBe("contactme");
    expect(params.get("firstname")).toBe("Jean");
    expect(params.get("lastname")).toBe("Dupont");
    expect(params.get("email")).toBe("jean@example.com");
    expect(params.get("message")).toBe("Bonjour !");
  });

  it("redirects to the error page when the submission fails", async () => {
    const user = userEvent.setup();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    server.use(http.post("*/favicon-32x32.png", () => HttpResponse.error()));
    render(<ContactRoute />, {
      path: "/contact",
      extraRoutes: [{ path: "/error", Component: () => <p>Oups</p> }],
    });
    await screen.findByRole("heading", { name: /me contacter/i });

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /envoyer/i }));

    expect(await screen.findByText("Oups")).toBeVisible();
    await waitFor(() => expect(errorSpy).toHaveBeenCalled());
  });
});
