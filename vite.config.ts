import { netlifyPlugin } from "@netlify/remix-edge-adapter/plugin";
import { vitePlugin as remix } from "@remix-run/dev";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), remix(), netlifyPlugin(), tsconfigPaths()],
});
