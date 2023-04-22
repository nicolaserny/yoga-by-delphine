/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildPath: ".netlify/functions-internal/server.js",
  server: "./server.js",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_meta: false,
  },
};
