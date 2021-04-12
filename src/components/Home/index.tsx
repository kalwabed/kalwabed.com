import 'twin.macro'
import dynamic from 'next/dynamic'

import Hero from './Hero'
import RecentPosts from './RecentPosts'
const FeaturedProject = dynamic(() => import('./FeaturedProject'))
const RecentBookmarks = dynamic(() => import('./RecentBookmarks'))

const HomePageRenderer = () => {
  return (
    <div tw="space-y-16">
      <Hero />
      <RecentPosts />
      <FeaturedProject />
      <RecentBookmarks />
    </div>
  )
}

export default HomePageRenderer
