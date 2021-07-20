import type { GetStaticProps } from 'next'

import PageWrapper from '@/components/layout/PageWrapper'
import HomePageRenderer from '@components/v2/Home'
import { getAllFrontMatters, getFeaturedProject } from '@/lib/mdx'
import { Bookmark, Post, Project } from '@/types'
import { getDatabases } from '@/lib/notion'
import Page from '@/components/v2/layout/Page'

export interface HomePageProps {
  posts: Post[]
  bookmarks: Bookmark[]
  featuredProject: Project
}

export default function HomePage(props: HomePageProps) {
  return (
    <Page>
      <HomePageRenderer {...props} />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFrontMatters('_posts')
  const featuredProject = getFeaturedProject() as Project
  const bookmarks = await getDatabases()

  return { props: { posts, bookmarks, featuredProject }, revalidate: 3 }
}
