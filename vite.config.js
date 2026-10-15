import { resolve } from "node:path";
import { defineConfig } from "vite";

// Páginas do projeto: cada uma vira uma entrada do build (site com várias páginas).
const PAGINAS = {
  dashboard: resolve(import.meta.dirname, "index.html"),
  guia: resolve(import.meta.dirname, "guia/index.html"),
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: PAGINAS,
    },
  },
});
