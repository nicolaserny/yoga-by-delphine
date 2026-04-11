import netlify from "@netlify/vite-plugin";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    netlifyPlugin({ edge: true }),
    netlify(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
