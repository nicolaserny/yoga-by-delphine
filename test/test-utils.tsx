import { render as rtlRender } from "@testing-library/react";
import type { ReactElement } from "react";
import { createRoutesStub } from "react-router";

type RouteConfig = Parameters<typeof createRoutesStub>[0][number];

export function render(
  ui: ReactElement,
  options?: {
    path?: string;
    loader?: () => unknown;
    extraRoutes?: RouteConfig[];
  },
) {
  const { path = "/", loader, extraRoutes = [] } = options ?? {};
  const Component = () => ui;
  const Stub = createRoutesStub([
    { path, Component, ...(loader && { loader }) },
    ...extraRoutes,
  ]);
  return rtlRender(<Stub initialEntries={[path]} />);
}

export { screen, waitFor, within } from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
