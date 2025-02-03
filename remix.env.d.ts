/// <reference types="@netlify/remix-runtime" />
/// <reference types="vite/client" />
export {};

declare global {
  interface Window {
    plausible?: (evt: string) => void;
  }
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
  }
  interface Process {
    env: ProcessEnv;
  }
  let process: Process;
  let Netlify: { env: { get: (key: string) => string | undefined } };
}
