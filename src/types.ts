import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface Post {
  title: string
  slug: string
  summary: string
  publishedAt: string
  updatedAt: string
}

export interface PostWithMdx extends Post {
  mdxSource: MDXRemoteSerializeResult
}

export interface Bookmarks {
  id: string
  noFavicon: boolean
  url: string
  description: string
  title: string
}

export interface Project {
  title: string
  banner: string
  description: string
  techs: string[]
  liveUrl: string
  shortDescription: string
  slug: string
  githubRepo: string
  isFeatured: boolean
  publishedAt: string
}

export interface ProjectWithMdx extends Project {
  mdxSource: MDXRemoteSerializeResult
}
