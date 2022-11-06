import FeaturedProject from '~components/home/featured-project'
import Hero from '~components/home/hero'
import RecentPosts from '~components/home/recent-posts'
import { getAllFrontMatters, getFeaturedProject } from '~lib/mdx'
import { Project } from '~types'

async function loader() {
  const posts = getAllFrontMatters('_posts')
  const featuredProject = getFeaturedProject() as Project

  return { posts, featuredProject }
}

const HomePage = async () => {
  const { posts, featuredProject } = await loader()

  return (
    <div className="space-y-20 mb-10">
      <Hero />
      <RecentPosts posts={posts} />
      <FeaturedProject project={featuredProject} />
    </div>
  )
}

export default HomePage
