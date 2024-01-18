import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		publishDate: z.date(),
		summary: z.string(),
		imageCover: z.string().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};
