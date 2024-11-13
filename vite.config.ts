import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false
  }
});
