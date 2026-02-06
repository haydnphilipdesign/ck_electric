import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        route1: resolve(__dirname, "1/index.html"),
        route2: resolve(__dirname, "2/index.html"),
        route3: resolve(__dirname, "3/index.html"),
        route4: resolve(__dirname, "4/index.html"),
        route5: resolve(__dirname, "5/index.html"),
      },
    },
  },
});
