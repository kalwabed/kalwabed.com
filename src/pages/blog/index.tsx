import type { GetStaticProps, NextPage } from 'next'

import SEO from '~components/SEO'
import { Post } from '~types'
import { getAllFrontMatters } from '~lib/mdx'
import BlogList from '~components/blog/blog-list'
import Container from '~components/shared/container'
import PageSection from '~components/shared/page-section'

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
