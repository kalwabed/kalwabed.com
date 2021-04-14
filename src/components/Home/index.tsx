import 'twin.macro'
import dynamic from 'next/dynamic'

import Hero from './Hero'
import RecentPosts from './RecentPosts'
import { Post } from '@/types'
const FeaturedProject = dynamic(() => import('./FeaturedProject'))
const RecentBookmarks = dynamic(() => import('./RecentBookmarks'))

interface Props {
  posts: Post[]
}

const HomePageRenderer = (props: Props) => {
  return (
    <div tw="space-y-16">
      <Hero />
      <RecentPosts posts={props.posts} />
      <FeaturedProject />
      <RecentBookmarks />
    </div>
  )
}

export default HomePageRenderer
