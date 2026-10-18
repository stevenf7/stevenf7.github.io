import { defineConfig } from "astro/config"
import react from "@astrojs/react"

export default defineConfig({
  site: "https://stevenf7.github.io",
  integrations: [react()],
  build: {
    format: "directory",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          silenceDeprecations: ["import", "global-builtin", "if-function"],
        },
      },
    },
  },
})
