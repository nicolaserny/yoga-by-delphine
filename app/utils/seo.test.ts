import type { Location } from "react-router";
import { getSeo, getUrl } from "./seo";

describe("getSeo", () => {
  it("returns default title when no title provided", () => {
    const result = getSeo({ url: "https://example.com" });
    const titleMeta = result.find((m) => "title" in m);
    expect(titleMeta).toEqual({ title: "Yoga by Delphine" });
  });

  it("returns custom title when provided", () => {
    const result = getSeo({
      title: "Me contacter",
      url: "https://example.com/contact",
    });
    const titleMeta = result.find((m) => "title" in m);
    expect(titleMeta).toEqual({ title: "Me contacter - Yoga by Delphine" });
  });

  it("returns default description when no description provided", () => {
    const result = getSeo({ url: "https://example.com" });
    const descMeta = result.find(
      (m) => "name" in m && m.name === "description",
    );
    expect(descMeta).toEqual({
      name: "description",
      content:
        "Réservez vos cours de yoga en ligne sur Zoom ou en studio à Paris. Hatha, vinyasa, yoga-balles et yoga pour runner avec Delphine Leblanc.",
    });
  });

  it("includes og:url meta tag with the provided url", () => {
    const result = getSeo({ url: "https://example.com/about" });
    const ogUrl = result.find(
      (m) => "property" in m && m.property === "og:url",
    );
    expect(ogUrl).toEqual({
      property: "og:url",
      content: "https://example.com/about",
    });
  });

  it("includes twitter:card meta tag", () => {
    const result = getSeo({ url: "https://example.com" });
    const twitterCard = result.find(
      (m) => "name" in m && m.name === "twitter:card",
    );
    expect(twitterCard).toEqual({
      name: "twitter:card",
      content: "summary_large_image",
    });
  });

  it("includes og:type meta tag", () => {
    const result = getSeo({ url: "https://example.com" });
    const ogType = result.find(
      (m) => "property" in m && m.property === "og:type",
    );
    expect(ogType).toEqual({ property: "og:type", content: "website" });
  });
});

describe("getUrl", () => {
  const createLocation = (pathname: string): Location =>
    ({
      pathname,
      search: "",
      hash: "",
      state: null,
      key: "default",
    }) as unknown as Location;

  it("returns siteUrl with pathname", () => {
    const result = getUrl(createLocation("/about"));
    expect(result).toBe("https://www.yogabydelphine.com/about");
  });

  it("removes trailing slash", () => {
    const result = getUrl(createLocation("/contact/"));
    expect(result).toBe("https://www.yogabydelphine.com/contact");
  });

  it("handles root path", () => {
    const result = getUrl(createLocation("/"));
    expect(result).toBe("https://www.yogabydelphine.com");
  });
});
