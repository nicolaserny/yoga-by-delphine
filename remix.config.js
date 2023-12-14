const { config } = require("@netlify/remix-edge-adapter");
const baseConfig =
  process.env.NODE_ENV === "production"
    ? config
    : { ignoredRouteFiles: ["**/.*"], serverModuleFormat: "cjs" };

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ...baseConfig,
  tailwind: true,
};
