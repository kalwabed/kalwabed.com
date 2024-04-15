import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import a11yEmoji from "@fec/remark-a11y-emoji";
import cloudflare from "@astrojs/cloudflare";
import { defineConfig, squooshImageService } from "astro/config";
import autoprefixer from "autoprefixer";
import Icons from "unplugin-icons/vite";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kalwabed.com",
  output: 'hybrid',
  image: {
    service: squooshImageService()
  },
  markdown: {
    remarkPlugins: [a11yEmoji, remarkReadingTime],
    shikiConfig: {
      theme: "vitesse-light"
    }
  },
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer]
      }
    },
    plugins: [Icons({
      compiler: "astro",
      autoInstall: true
    })]
  },
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(), 
});
