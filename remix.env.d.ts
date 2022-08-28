/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

export {};

declare global {
  interface Window {
    plausible?: (evt: string) => void;
  }
}
