import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  // https://github.com/remix-run/react-router/issues/13226
  // prerender: ["/", "/about", "/contact"],
} satisfies Config;
