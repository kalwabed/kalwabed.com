import 'twin.macro'
import dynamic from 'next/dynamic'

import Hero from './Hero'
import RecentPosts from './RecentPosts'
import { Bookmarks, Post } from '@/types'
const FeaturedProject = dynamic(() => import('./FeaturedProject'))
const RecentBookmarks = dynamic(() => import('./RecentBookmarks'))

interface Props {
  posts: Post[]
  bookmarks: Bookmarks[]
}

const HomePageRenderer = (props: Props) => {
  return (
    <div tw="space-y-16">
      <Hero />
      <RecentPosts posts={props.posts} />
      <FeaturedProject />
      <RecentBookmarks bookmarks={props.bookmarks} />
    </div>
  )
}

export default HomePageRenderer
