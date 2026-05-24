import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { server } from "./mocks/server";

process.env.SHOPIFY_DELEGATE_ACCESS_TOKEN = "test-storefront-token";
process.env.SHOPIFY_ADMIN_API_PASSWORD = "test-admin-token";
process.env.SHOP_NAME = "test-shop";

globalThis.Netlify = {
  env: {
    get: (key: string) => process.env[key],
  },
};

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

if (typeof window !== "undefined") {
  window.plausible = vi.fn();
}
