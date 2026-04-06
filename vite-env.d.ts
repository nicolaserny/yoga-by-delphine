/// <reference types="vite/client" />

declare global {
  interface Window {
    plausible?: (evt: string) => void;
  }
  const Netlify: { env: { get: (key: string) => string | undefined } };
}

export {};
