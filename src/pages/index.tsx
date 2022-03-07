import type { GetStaticProps } from 'next'

import FeaturedProject from '~components/home/featured-project'
import Hero from '~components/home/hero'
import RecentPosts from '~components/home/recent-posts'
import SEO from '~components/SEO'
import { getAllFrontMatters, getFeaturedProject } from '~lib/mdx'
import { NextPageWithLayout, Post, Project } from '~types'

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFrontMatters('_posts')
  const featuredProject = getFeaturedProject() as Project

  return { props: { posts, featuredProject } }
}

export interface HomePageProps {
  posts: Post[]
  featuredProject: Project
}

const HomePage: NextPageWithLayout<HomePageProps> = ({ posts, featuredProject }) => {
  return (
    <div className="space-y-20 mb-10">
      <SEO defaultTitle="%s" />
      <Hero />
      <RecentPosts posts={posts} />
      <FeaturedProject project={featuredProject} />
    </div>
  )
}

export default HomePage
