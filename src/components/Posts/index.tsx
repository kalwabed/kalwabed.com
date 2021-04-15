import { Container } from '@/utils/styles'
import SEO from '../SEO'
import PostList from './PostList'

const PostsPageRenderer = () => {
  return (
    <section css={[Container]}>
      <SEO title="Posts" />
      <PostList />
    </section>
  )
}

export default PostsPageRenderer
