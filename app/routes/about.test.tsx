import AboutRoute from "./about";
import { render, screen } from "~/../test/test-utils";

describe("AboutRoute", () => {
  it("renders the page title", async () => {
    render(<AboutRoute />, { path: "/about" });
    expect(
      await screen.findByRole("heading", {
        name: /je suis delphine, professeur de yoga/i,
      }),
    ).toBeVisible();
  });

  it("opens every external link safely", async () => {
    const { container } = render(<AboutRoute />, { path: "/about" });
    await screen.findByRole("heading", {
      name: /je suis delphine, professeur de yoga/i,
    });

    const externalLinks =
      container.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]');
    expect(externalLinks.length).toBeGreaterThan(0);
    for (const link of externalLinks) {
      expect(link.rel).toContain("noreferrer");
      expect(link.rel).toContain("noopener");
    }
  });
});
