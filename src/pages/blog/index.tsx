import type { NextPage } from 'next'

import BlogPageRenderer from '@components/v2/blog'
import Page from '@components/v2/layout/page'
import SEO from '@components/SEO'

const BlogPage: NextPage = () => {
  return (
    <Page>
      <SEO title="Blog" description="My writing about the web, and my experience" />
      <BlogPageRenderer />
    </Page>
  )
}

export default BlogPage
