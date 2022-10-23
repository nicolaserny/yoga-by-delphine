/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    "@remix-run/web-blob",
    "@remix-run/web-fetch",
    "@remix-run/web-form-data",
    "@remix-run/web-stream",
    "data-uri-to-buffer",
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};
