import type { GetStaticProps, NextPage } from 'next'

import HomePageRenderer from '@components/home'
import { getAllFrontMatters, getFeaturedProject } from '@/lib/mdx'
import { Post, Project } from '@/types'
import Page from '@components/layout/page'

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFrontMatters('_posts')
  const featuredProject = getFeaturedProject() as Project

  return { props: { posts, featuredProject } }
}

export interface HomePageProps {
  posts: Post[]
  featuredProject: Project
}

const HomePage: NextPage<HomePageProps> = props => {
  return (
    <Page>
      <HomePageRenderer {...props} />
    </Page>
  )
}

export default HomePage
