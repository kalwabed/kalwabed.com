import type { GetStaticProps } from 'next'

import PageWrapper from '@/components/layout/PageWrapper'
import HomePageRenderer from '@/components/Home'
import { getAllFrontMatters, getFeaturedProject } from '@/utils/mdx'
import { Bookmarks, Post, Project } from '@/types'
import { getDatabases } from '@/lib/notion'

export interface HomePageProps {
  posts: Post[]
  bookmarks: Bookmarks[]
  featuredProject: Project
}

export default function HomePage(props: HomePageProps) {
  return (
    <PageWrapper pageTitle="Home">
      <HomePageRenderer {...props} />
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFrontMatters('_posts')
  const featuredProject = getFeaturedProject() as Project
  const bookmarks = await getDatabases()

  return { props: { posts, bookmarks, featuredProject }, revalidate: 3 }
}
