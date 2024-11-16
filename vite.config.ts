import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import fontSubsetter from "./plugins";

export default defineConfig({
  plugins: [
    react(),
    fontSubsetter({
      verbose: true,
      basedOn: [
        {
          dir: "public/contents",
          ext: "json"
        }
      ]
    })
  ],
  build: {
    target: "esnext",
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false
  }
});
