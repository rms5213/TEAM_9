import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve("src") }],
  },
  server: {
    proxy: {
      "/api": {
        target: "https://seasonwell.run.goorm.site/",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
