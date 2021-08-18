import 'twin.macro'

import { PostWithMdx } from '@/types'
import { Container } from '@components/v2/shared/container'
import PostContent from './post-content'
import PostHeader from './post-header'

const BlogBySlugPageRenderer = ({ post }: { post: PostWithMdx }) => {
  return (
    <div css={[Container]}>
      <PostHeader publishedAt={post.publishedAt} title={post.title} />
      <PostContent content={post.mdxSource} />
    </div>
  )
}

export default BlogBySlugPageRenderer
