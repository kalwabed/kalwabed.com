import mdx from "@astrojs/mdx";
import a11yEmoji from "@fec/remark-a11y-emoji";
import { defineConfig, squooshImageService } from "astro/config";
import Icons from "unplugin-icons/vite";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
	site: "https://www.kalwabed.xyz",
	image: {
		service: squooshImageService(),
	},
	markdown: {
		remarkPlugins: [a11yEmoji, remarkReadingTime],
		shikiConfig: {
			theme: "vitesse-light",
		},
	},
	vite: {
		plugins: [
			Icons({
				compiler: "astro",
				autoInstall: true,
			}),
		],
	},
	integrations: [mdx()],
});
