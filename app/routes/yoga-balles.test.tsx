import YogaBallesRoute from "./yoga-balles";
import { render, screen } from "~/../test/test-utils";

describe("YogaBallesRoute", () => {
  it("renders the page title", async () => {
    render(<YogaBallesRoute />, { path: "/yoga-balles" });
    expect(
      await screen.findByRole("heading", { name: /^yoga-balles$/i, level: 1 }),
    ).toBeVisible();
  });

  it("opens every external link safely", async () => {
    const { container } = render(<YogaBallesRoute />, { path: "/yoga-balles" });
    await screen.findByRole("heading", { name: /^yoga-balles$/i, level: 1 });

    const externalLinks =
      container.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]');
    expect(externalLinks.length).toBeGreaterThan(0);
    for (const link of externalLinks) {
      expect(link.rel).toContain("noreferrer");
      expect(link.rel).toContain("noopener");
    }
  });
});
