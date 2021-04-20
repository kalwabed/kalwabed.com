export interface Post {
  title: string
  slug: string
  summary: string
  githubRepository: string
  publishedAt: string
  updatedAt: string
}

export interface PostWithMdx extends Post {
  mdxSource: string
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
  githubRepo?: string
}
