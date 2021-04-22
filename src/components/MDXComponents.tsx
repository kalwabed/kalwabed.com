import dynamic from 'next/dynamic'

// to prevent being loaded when a page is not needed (e.g. post page)
const Content = dynamic(() => import('./Projects/module/Contents').then(mod => mod.Content))
const ContentWithImage = dynamic(() => import('./Projects/module/Contents').then(mod => mod.ContentWithImage))

// if needed, add mdx components here
const MDXComponents = { Content, ContentWithImage }

export default MDXComponents
