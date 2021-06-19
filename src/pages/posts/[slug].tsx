import type { GetStaticPaths, GetStaticProps } from 'next'

import PostBySlugRenderer from '@/components/Posts/PostBySlugRenderer'
import { PostWithMdx } from '@/types'
import { getDataBySlug, getSlugs } from '@/lib/mdx'

const PostPage = ({ post }: { post: PostWithMdx }) => {
  return <PostBySlugRenderer post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('_posts')

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string
  const post = await getDataBySlug('_posts', slug)

  return { props: { post } }
}

export default PostPage
