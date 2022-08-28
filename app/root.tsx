import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Layout } from "./components";
import { getSeo, siteUrl } from "./utils/seo";

export const links: LinksFunction = () => [
  { rel: "canonical", href: siteUrl },
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

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1,shrink-to-fit=no",
  ...getSeo({}),
  "google-site-verification": "E2uVZDGLRE9ex-JJspJjaoylJbHbc0AlU9IwCXotGqg",
});

export default function App() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
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
