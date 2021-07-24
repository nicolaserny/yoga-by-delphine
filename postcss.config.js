module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-focus-visible"),
    require("autoprefixer"),
  ],
};
