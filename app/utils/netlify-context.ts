import { netlifyRouterContext } from "@netlify/vite-plugin-react-router/edge";
import type { RouterContextProvider } from "react-router";

export { netlifyRouterContext };

export function getBuyerIP(
  context: Readonly<RouterContextProvider>,
): string | undefined {
  return context.get(netlifyRouterContext).ip || undefined;
}
