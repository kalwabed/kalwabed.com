import 'twin.macro'

import { Post } from '~types'
import { Container } from '../shared/container'
import PageSection from '../shared/page-section'
import BlogList from './blog-list'

const BlogPageRenderer = ({ posts }: { posts: Post[] }) => {
  return (
    <div css={[Container]} tw="my-20">
      <PageSection title="Blog." subTitle="Sometimes I write something and put it here" />
      <BlogList posts={posts} />
    </div>
  )
}

export default BlogPageRenderer
