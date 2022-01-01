import dynamic from 'next/dynamic'

// to prevent being loaded when a page is not needed (e.g. post page)
const Content = dynamic(() => import('./project-mdx').then(mod => mod.Content))
const ContentWithImage = dynamic(() => import('./project-mdx').then(mod => mod.ContentWithImage))
const JustImages = dynamic(() => import('./project-mdx').then(mod => mod.JustImages))
const Link = dynamic(() => import('./project-mdx').then(mod => mod.Link))

export const ProjectMDXComponents = { Content, ContentWithImage, JustImages, Link }
