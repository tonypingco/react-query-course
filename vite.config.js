import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      app: resolve(__dirname, "src", "app"),
      components: resolve(__dirname, "src", "components"),
      contexts: resolve(__dirname, "src", "contexts"),
      helpers: resolve(__dirname, "src", "helpers"),
      hooks: resolve(__dirname, "src", "hooks"),
      interfaces: resolve(__dirname, "src", "interfaces"),
      pages: resolve(__dirname, "src", "pages"),
    },
  },
});
