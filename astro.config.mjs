import a11yEmoji from "@fec/remark-a11y-emoji";
import { defineConfig, squooshImageService } from "astro/config";
import Icons from "unplugin-icons/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService()
  },
  markdown: {
    remarkPlugins: [a11yEmoji],
    shikiConfig: {
      theme: "vitesse-light"
    }
  },
  vite: {
    plugins: [Icons({
      compiler: "astro",
      autoInstall: true
    })]
  },
  integrations: [mdx()]
});
