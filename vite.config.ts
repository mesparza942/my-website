/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  test: {
    include: ["src/**/*.{spec,test}.tsx"],
    browser: { enabled: true },
    setupFiles: "src/setupTests.ts",
  },
});
