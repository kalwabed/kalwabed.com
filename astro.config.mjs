import { defineConfig, squooshImageService } from "astro/config";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
	image: {
		service: squooshImageService()
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
