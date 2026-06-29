import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://klangfinder.de",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    format: "directory",
  },
});
