/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildPath: ".netlify/functions-internal/server.js",
  server: "./server.js",
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  serverModuleFormat: "cjs",
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
