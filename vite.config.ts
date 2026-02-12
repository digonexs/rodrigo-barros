import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

export default defineConfig({
  root: path.resolve(__dirname, "client"),

  plugins: [
    react(),
    tailwindcss(),
    metaImagesPlugin()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@assets": path.resolve(__dirname, "client", "assets")
    }
  },

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  },

  server: {
    port: 5173,
    strictPort: true
  }
});