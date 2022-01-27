export {};

declare global {
  interface Window {
    plausible?: (evt: string) => void;
  }

  namespace ShopifyBuy {
    interface Cart {
      webUrl: string;
    }
  }
}
