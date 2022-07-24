import dynamic from 'next/dynamic'

// to prevent being loaded when a page is not needed (e.g. post page)
const Content = dynamic(() => import('./project-mdx').then(mod => mod.Content))
const ContentWithImage = dynamic(() => import('./project-mdx').then(mod => mod.ContentWithImage))
const JustImages = dynamic(() => import('./project-mdx').then(mod => mod.JustImages))
const Link = dynamic(() => import('./project-mdx').then(mod => mod.Link))
const PostImage = dynamic(() => import('./post-mdx').then(mod => mod.PostImage))
const Update = dynamic(() => import('./post-mdx').then(mod => mod.Update))

export const ProjectMDXComponents = {
  Content,
  ContentWithImage,
  JustImages,
  Link
}
export const PostMDXComponents = { PostImage, Update }
