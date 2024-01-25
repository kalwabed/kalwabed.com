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

export async function getSortedProjects() {
	const projects = await getCollection("projects");
	const sortedProjects = projects.sort((a, b) => {
		return (
			new Date(b.data.releaseDate).getTime() -
			new Date(a.data.releaseDate).getTime()
		);
	});

	return sortedProjects;
}
