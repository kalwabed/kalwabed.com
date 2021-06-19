import type { GetStaticProps } from 'next'

import PostsPageRenderer from '@/components/Posts'
import { getAllFrontMatters } from '@/utils/mdx'
import { Post } from '@/types'

const PostsPage = ({ posts }: { posts: Post[] }) => {
  return <PostsPageRenderer posts={posts} />
}

export default PostsPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFrontMatters('_posts')

  return { props: { posts } }
}
