const { config } = require("@netlify/remix-edge-adapter");

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ...config,
  tailwind: true,
};
