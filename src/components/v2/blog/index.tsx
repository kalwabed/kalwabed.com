import 'twin.macro'

import { Container } from '../shared/container'
import PageSection from '../shared/page-section'
import BlogList from './blog-list'

const BlogPageRenderer = () => {
  return (
    <div css={[Container]} tw="my-20">
      <PageSection title="Blog." subTitle="You’ve find my blog page" />

      <BlogList />
    </div>
  )
}

export default BlogPageRenderer
