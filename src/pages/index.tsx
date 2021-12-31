import type { GetStaticProps, NextPage } from 'next'

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

const HomePage: NextPageWithLayout = props => {
  return (
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet ea aliquam reprehenderit, veritatis
      possimus nemo qui sunt voluptatem, neque unde praesentium voluptatum vitae, numquam modi quia ex voluptas dolores.
    </p>
  )
}

export default HomePage
