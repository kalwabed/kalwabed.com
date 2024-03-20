import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: "Kalwabed personal blog",
		description:
			"Kalwabed is a software engineer in web, based in Yogyakarta, Indonesia",
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.publishDate).toISOString(),
			description: post.data.summary,
			link: `/blog/${post.slug}`,
		})),
	});
}
