import type { LinksFunction } from "@netlify/remix-runtime";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import { Layout } from "./components";
import styles from "./tailwind.css";
import { getUrl } from "./utils/seo";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    as: "font",
    href: "/fonts/montserrat-v15-latin-regular.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/montserrat-v15-latin-italic.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/merriweather-v22-latin-700.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/montserrat-v15-latin-500.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/montserrat-v15-latin-600.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/montserrat-v15-latin-700.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "preconnect", href: "https://res.cloudinary.com" },
  { rel: "dns-prefetch", href: "https://res.cloudinary.com" },
  { rel: "manifest", href: "/site.webmanifest" },
  {
    rel: "apple-touch-icon",
    sizes: "192x192",
    href: "/icons/icon-192x192.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "512x512",
    href: "/icons/icon-512x512.png",
  },
  { rel: "icon", href: "/favicon-32x32.png", type: "image/png" },
  { rel: "stylesheet", href: styles },
];

function CanonicalLink() {
  const location = useLocation();
  const canonicalUrl = getUrl(location);
  return <link rel="canonical" href={canonicalUrl} />;
}

export default function App() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="E2uVZDGLRE9ex-JJspJjaoylJbHbc0AlU9IwCXotGqg"
        />
        <Meta />
        <CanonicalLink />
        <Links />
        <script
          key="plausible-script"
          async
          defer
          data-domain="yogabydelphine.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <script
          key="plausible-custom-events"
          dangerouslySetInnerHTML={{
            __html: `
        window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) } `,
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
