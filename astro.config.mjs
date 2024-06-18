import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    icon({
      include: {
        mdi: ["linkedin", "github", "twitter", "email", "instagram", "rss"],
      },
    }),
  ],
  site: "https://baezor.io/",
  prefetch: true,
});
