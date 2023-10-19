import { createRequestHandler } from "@netlify/remix-edge-adapter";
import * as build from "@remix-run/dev/server-build";

export default createRequestHandler({
  build: build,
  // process.env.NODE_ENV is provided by Remix at compile time
  mode: process.env.NODE_ENV,
});

export const config = {
  cache: "manual",
  path: "/*",
  // Let the CDN handle requests for static assets, i.e. ^/_assets/*$
  //
  // Add other exclusions here, e.g. "^/api/*$" for custom Netlify functions or
  // custom Netlify Edge Functions
  excludedPath: [
    "/fonts/*.woff2",
    "/icons/*.png",
    "/form.html",
    "/robots.txt",
    "/sitemap.xml",
    "/*.png",
    "/*.jpg",
    "/*.ico",
    "/build/_assets/*",
  ],
};
