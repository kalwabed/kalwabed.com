import 'twin.macro'
import dynamic from 'next/dynamic'

import Hero from './hero'
import RecentPosts from './recent-posts'
import { HomePageProps } from '@/pages'

const FeaturedProject = dynamic(() => import('./featured-project'))

const HomePageRenderer = (props: HomePageProps) => {
  const { featuredProject, posts } = props

  return (
    <div tw="space-y-20 mb-10">
      <Hero />
      <RecentPosts posts={posts} />
      <FeaturedProject project={featuredProject} />
    </div>
  )
}

export default HomePageRenderer
