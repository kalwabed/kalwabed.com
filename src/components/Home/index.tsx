import 'twin.macro'

import Hero from './Hero'
import RecentPosts from './RecentPosts'
import FeaturedProject from './FeaturedProject'

const HomePageRenderer = () => {
  return (
    <div tw="space-y-16">
      <Hero />
      <RecentPosts />
      <FeaturedProject />
    </div>
  )
}

export default HomePageRenderer
