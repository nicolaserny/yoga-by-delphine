import { config } from "@netlify/remix-edge-adapter";
const baseConfig =
  process.env.NODE_ENV === "production"
    ? config
    : { ignoredRouteFiles: ["**/.*"] };

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
  ...baseConfig,
  tailwind: true,
};
