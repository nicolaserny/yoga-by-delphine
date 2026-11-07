import netlify from "@netlify/vite-plugin";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";

// React 19.3 changed the "deno" export condition of react-dom/server to the
// Node.js build, which pulls Node built-ins into Netlify's edge function.
// Drop "deno" and "node" for the edge build so the browser/worker build wins.
function netlifyEdgeConditions(): Plugin {
  return {
    name: "netlify-edge-conditions",
    apply: "build",
    configResolved(config) {
      const conditions = config.environments?.ssr?.resolve?.conditions;
      if (conditions) {
        config.environments.ssr.resolve.conditions = conditions.filter(
          (condition) => condition !== "deno" && condition !== "node",
        );
      }
    },
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    netlifyPlugin({ edge: true }),
    netlifyEdgeConditions(),
    netlify(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
