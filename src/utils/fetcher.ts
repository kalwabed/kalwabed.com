import { getCollection } from "astro:content";

export async function getSortedPosts() {
	const allBlogPosts = await getCollection("blog");
	const sortedBlog = allBlogPosts.sort((a, b) => {
		return (
			new Date(b.data.publishDate).getTime() -
			new Date(a.data.publishDate).getTime()
		);
	});

	return sortedBlog;
}
