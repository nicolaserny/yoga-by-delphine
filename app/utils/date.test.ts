import { parseCourseDate } from "./date";

describe("parseCourseDate", () => {
  it("parses REGULAR course date format", () => {
    const course = {
      id: "1",
      type: "REGULAR" as const,
      title: "Hatha Yoga",
      description: "Cours de hatha yoga",
      datetime: "15/03/2025 à 09:00",
      price: 25,
      category: "online" as const,
      shopifyId: "gid://shopify/ProductVariant/123",
    };
    const result = parseCourseDate(course);
    expect(result).toBeInstanceOf(Date);
    expect((result as Date).getDate()).toBe(15);
    expect((result as Date).getMonth()).toBe(2);
  });

  it("parses SUBSCRIPTION course date format", () => {
    const course = {
      id: "2",
      type: "SUBSCRIPTION" as const,
      title: "Abonnement Mars",
      description: "Abonnement mensuel",
      datetime: "03/2025",
      price: 80,
      category: "online" as const,
      shopifyId: "gid://shopify/ProductVariant/124",
    };
    const result = parseCourseDate(course);
    expect(result).toBeInstanceOf(Date);
    expect((result as Date).getMonth()).toBe(2);
    expect((result as Date).getFullYear()).toBe(2025);
  });

  it("returns datetime string as-is for CARD type", () => {
    const course = {
      id: "3",
      type: "CARD" as const,
      title: "Carte 5 cours",
      description: "Carte de 5 cours",
      datetime: "Valable 6 mois",
      price: 100,
      category: "online" as const,
      shopifyId: "gid://shopify/ProductVariant/125",
    };
    const result = parseCourseDate(course);
    expect(result).toBe("Valable 6 mois");
  });
});
