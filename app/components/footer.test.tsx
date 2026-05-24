import Footer from "./footer";
import { render, screen, within } from "~/../test/test-utils";

const socialLinks = [
  {
    label: "Instagram de Delphine",
    href: "https://www.instagram.com/delphineleblancyoga/",
  },
  {
    label: "Chaine YouTube de Delphine",
    href: "https://www.youtube.com/@delphineleblancyoga",
  },
  {
    label: "Page Facebook de Delphine",
    href: "https://www.facebook.com/delphineleblancyoga",
  },
];

const coursLinks = [
  { name: /programme/i, href: "/schedule" },
  { name: /cartes-cadeaux/i, href: "/gift-cards" },
  { name: /yoga-balles/i, href: "/yoga-balles" },
];

const decouvrirLinks = [
  { name: /à propos/i, href: "/about" },
  { name: /vidéos/i, href: "/videos" },
  { name: /contact/i, href: "/contact" },
];

describe("Footer", () => {
  it("renders the contentinfo landmark", () => {
    render(<Footer />);
    expect(
      screen.getByRole("contentinfo", { name: /footer/i }),
    ).toBeInTheDocument();
  });

  it("links to each social profile safely and accessibly", () => {
    render(<Footer />);

    for (const { label, href } of socialLinks) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noreferrer");
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });

  it("renders the Cours navigation links", () => {
    render(<Footer />);
    const nav = within(
      screen.getByRole("navigation", { name: /navigation des cours/i }),
    );

    for (const { name, href } of coursLinks) {
      expect(nav.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("renders the Découvrir navigation links", () => {
    render(<Footer />);
    const nav = within(
      screen.getByRole("navigation", { name: /navigation de découverte/i }),
    );

    for (const { name, href } of decouvrirLinks) {
      expect(nav.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("shows the current copyright year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`©\\s*${year}\\s*Yoga by Delphine`, "i")),
    ).toBeVisible();
  });
});
