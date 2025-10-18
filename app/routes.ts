import { type RouteConfig, route } from "@react-router/dev/routes";

// Explicit route definitions for React Router 7 native routing
// All routes are siblings at the root level (no nesting)
export default [
  // Homepage route
  route("/", "./routes/_index.tsx"),

  // Page routes
  route("/about", "./routes/about.tsx"),
  route("/contact", "./routes/contact.tsx"),
  route("/gift-cards", "./routes/gift-cards.tsx"),
  route("/schedule", "./routes/schedule.tsx"),
  route("/videos", "./routes/videos.tsx"),
  route("/yoga-balles", "./routes/yoga-balles.tsx"),
  route("/sent", "./routes/sent.tsx"),
  route("/error", "./routes/error.tsx"),

  // API routes
  route("/api/checkout", "./routes/api.checkout.tsx"),

  // Catch-all route for unmatched paths
  route("*", "./routes/$.tsx"),
] satisfies RouteConfig;
