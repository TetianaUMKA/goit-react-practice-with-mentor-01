import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  build: { sourcemap: true },
  resolve: {
    alias: {
      components: "/src/components",
      data: "/src/data",
      helpers: "/src/helpers",
      styles: "/src/styles",
    },
  },
});
