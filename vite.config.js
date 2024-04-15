// builder does optimizations, minifications
import { defineConfig } from "vite";

export default defineConfig({
  base: "/2d-dev-portfolio/",
  build: {
    minify: "terser",
  },
});
