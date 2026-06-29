import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://kopfhoerer-audio-ratgeber.pages.dev",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/sitemap.xml") && !page.endsWith("/sitemap-index.xml"),
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    format: "directory",
  },
});
