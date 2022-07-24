import type { GetStaticProps, NextPage } from 'next'

import BlogList from '~components/blog/blog-list'
import SEO from '~components/SEO'
import Container from '~components/shared/container'
import PageSection from '~components/shared/page-section'
import { getAllFrontMatters } from '~lib/mdx'
import { Post } from '~types'

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFrontMatters('_posts')

  return { props: { posts } }
}

const BlogPage: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Container className="my-20">
      <SEO title="Blog" description="Sometimes I write something and put it here." />
      <PageSection title="Blog." subTitle="Sometimes I write something and put it here" />
      <BlogList posts={posts} />
    </Container>
  )
}

export default BlogPage
