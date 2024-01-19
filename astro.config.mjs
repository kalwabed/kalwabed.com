import { defineConfig, squooshImageService } from "astro/config";
import a11yEmoji from '@fec/remark-a11y-emoji'
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
	image: {
		service: squooshImageService(),
	},
	markdown: {
		remarkPlugins: [a11yEmoji],
		shikiConfig: {
			theme: 'vitesse-light'
		}
	},
	vite: {
		plugins: [
			Icons({
				compiler: "astro",
				autoInstall: true,
			}),
		],
	},
});
