import { MdxRemote } from 'next-mdx-remote/types'

export interface Post {
  title: string
  slug: string
  summary: string
  githubRepository: string
  publishedAt: string
  updatedAt: string
}

export interface PostWithMdx extends Post {
  mdxSource: MdxRemote.Source
}

export interface Bookmarks {
  id: string
  noFavicon: boolean
  url: string
  description: string
  title: string
}

export interface ProjectMeta {
  title: string
  banner: string
  description: string
  techs: string[]
  liveUrl?: string
  shortDescription?: string
  slug?: string
  githubRepo?: string
}

export interface ProjectWithMdx extends ProjectMeta {
  mdxSource: MdxRemote.Source
}
