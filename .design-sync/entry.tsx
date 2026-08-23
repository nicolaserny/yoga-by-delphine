// Hand-written bundle entry for design-sync.
//
// The app's components are *default* exports, so a synthesized `export *` entry
// would miss them. This barrel re-exports the scoped primitives as named
// exports so they land on `window.<globalName>.<Name>`.
//
// MemoryRouter is exported here only so the preview provider (cfg.provider) can
// wrap cards in a router context — several primitives render react-router
// `Link`/`Form`. It is not in componentSrcMap, so it produces no card.
export { default as Button } from "../app/components/button";
export { default as Input } from "../app/components/input";
export { default as Textarea } from "../app/components/textarea";
export { default as Label } from "../app/components/label";
export { default as Quote } from "../app/components/quote";
export { default as AnchorLink } from "../app/components/anchorLink";
export { default as Announcement } from "../app/components/announcement";
export { default as ClassFormatCard } from "../app/components/classFormatCard";
export { default as GiftCard } from "../app/components/giftCard";

// Preview provider (cfg.provider). Several primitives render react-router
// `Link`/`Form`; `Form` needs a *data* router, so we wrap each card in a
// memory data router whose single catch-all route renders the card.
import type { ReactNode } from "react";
import { createMemoryRouter, RouterProvider } from "react-router";

export const DesignProvider = ({ children }: { children?: ReactNode }) => {
  const router = createMemoryRouter([{ path: "*", element: <>{children}</> }]);
  return <RouterProvider router={router} />;
};
