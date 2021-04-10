import 'twin.macro'

import Hero from './Hero'
import RecentPosts from './RecentPosts'
import FeaturedProjects from './FeaturedProjects'

const HomePageRenderer = () => {
  return (
    <div tw="space-y-16">
      <Hero />
      <RecentPosts />
      <FeaturedProjects />
    </div>
  )
}

export default HomePageRenderer
