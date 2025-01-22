export {}; // Make this file a module to avoid scope errors

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
