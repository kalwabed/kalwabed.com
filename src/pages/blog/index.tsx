import type { GetStaticProps, NextPage } from 'next'

import BlogPageRenderer from '@components/blog'
import Page from '@components/layout/page'
import SEO from '@components/SEO'
import { Post } from '@/types'
import { getAllFrontMatters } from '@/lib/mdx'

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFrontMatters('_posts')

  return { props: { posts } }
}

const BlogPage: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Page>
      <SEO title="Blog" description="Sometimes I write something and put it here." />
      <BlogPageRenderer posts={posts} />
    </Page>
  )
}

export default BlogPage
