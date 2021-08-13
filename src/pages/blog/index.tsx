import type { NextPage } from 'next'

import BlogPageRenderer from '@components/v2/blog'
import Page from '@components/v2/layout/page'

const BlogPage: NextPage = () => {
  return (
    <Page>
      <BlogPageRenderer />
    </Page>
  )
}

export default BlogPage
