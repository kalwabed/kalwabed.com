import { PostWithMdx } from '@/types'
import PostContent from './post-content'
import PostHeader from './post-header'

const BlogBySlugPageRenderer = ({ post }: { post: PostWithMdx }) => {
  return (
    <>
      <PostHeader publishedAt={post.publishedAt} title={post.title} />
      <PostContent content={post.mdxSource} />
    </>
  )
}

// TODO: add post update section

export default BlogBySlugPageRenderer
