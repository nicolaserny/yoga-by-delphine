/// <reference types="vite/client" />

declare global {
  interface Window {
    plausible?: (evt: string) => void;
  }
  var Netlify: { env: { get: (key: string) => string | undefined } };
}

export {};
