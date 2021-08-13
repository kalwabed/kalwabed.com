import type { GetStaticProps } from 'next'

import HomePageRenderer from '@components/v2/home'
import { getAllFrontMatters, getFeaturedProject } from '@/lib/mdx'
import { Post, Project } from '@/types'
import Page from '@components/v2/layout/page'

export interface HomePageProps {
  posts: Post[]
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

  return { props: { posts, featuredProject } }
}
