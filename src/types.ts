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

export interface Project {
  title: string
  status: string
  summary: string
  techs: string[]
  liveUrl: string
  description: string
  slug: string
  githubRepo: string
  isFeatured: boolean
  publishedAt: string
}

export interface ProjectWithMdx extends Project {
  mdxSource: MDXRemoteSerializeResult
}
