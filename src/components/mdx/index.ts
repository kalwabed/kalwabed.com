import dynamic from 'next/dynamic'

// to prevent being loaded when a page is not needed (e.g. post page)
const Content = dynamic(() => import('./Project').then(mod => mod.Content))
const ContentWithImage = dynamic(() => import('./Project').then(mod => mod.ContentWithImage))
const JustImages = dynamic(() => import('./Project').then(mod => mod.JustImages))
const PostImage = dynamic(() => import('./Post').then(mod => mod.PostImage))

export const ProjectMDXComponents = { Content, ContentWithImage, JustImages }
export const PostMDXComponents = { PostImage }
