import 'twin.macro'

import Hero from './Hero'
import RecentPosts from './RecentPosts'

const HomePageRenderer = () => {
  return (
    <div tw="space-y-16">
      <Hero />
      <RecentPosts />
    </div>
  )
}

export default HomePageRenderer
