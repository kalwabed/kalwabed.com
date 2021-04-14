export interface Post {
  title: string
  slug: string
  summary: string
  publishedAt: string
  readingTime: number
  featuredImage: {
    image: string
    source: string
    name: string
  }
}
