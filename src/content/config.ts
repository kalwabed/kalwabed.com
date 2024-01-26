import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		publishDate: z.date(),
		summary: z.string(),
		imageCover: z.string().optional(),
		ogImage: z.string(),
	}),
});

const projectCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		releaseDate: z.date(),
		summary: z.string(),
		demoUrl: z.string().url().optional(),
		faviconPath: z.string().optional(),
		sourceUrl: z.string().url().optional(),
		techs: z.string().array(),
		imageCover: z.string(),
		isFeatured: z.boolean().default(false),
		ogImage: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
	projects: projectCollection,
};
