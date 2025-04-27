import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import a11yEmoji from "@fec/remark-a11y-emoji";
import { defineConfig, fontProviders } from "astro/config";
import autoprefixer from "autoprefixer";
import Icons from "unplugin-icons/vite";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kalwabed.com",
  markdown: {
    remarkPlugins: [a11yEmoji, remarkReadingTime],
    shikiConfig: {
      theme: "vitesse-light",
    },
  },
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
    plugins: [
      Icons({
        compiler: "astro",
        autoInstall: true,
      }),
    ],
  },
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    imageService: "compile",
  }),
  experimental: {
    fonts: [
      {
        provider: fontProviders.bunny(),
        name: "Overpass",
        cssVariable: "--font-body",
        fallbacks: ["Open Sans", "sans-serif"],
        weights: [400, 500, 600, 700],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.bunny(),
        name: "Schoolbell",
        fallbacks: ["Cochin", "serif"],
        cssVariable: "--font-heading",
        weights: [400, 500, 600, 700],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.bunny(),
        name: "Fira Code",
        fallbacks: ["Courier", "monospace"],
        cssVariable: "--font-mono",
      },
    ],
  },
});
