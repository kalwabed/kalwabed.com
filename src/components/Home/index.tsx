import 'twin.macro'
import dynamic from 'next/dynamic'

import Hero from '@components/v2/home/Hero'
import RecentPosts from './RecentPosts'
import { HomePageProps } from '@/pages'
const FeaturedProject = dynamic(() => import('./FeaturedProject'))
const RecentBookmarks = dynamic(() => import('./RecentBookmarks'))

const HomePageRenderer = (props: HomePageProps) => {
  const { bookmarks, featuredProject, posts } = props

  return (
    <div tw="space-y-16">
      <Hero />
      <RecentPosts posts={posts} />
      <FeaturedProject project={featuredProject} />
      <RecentBookmarks bookmarks={bookmarks} />
    </div>
  )
}

export default HomePageRenderer
