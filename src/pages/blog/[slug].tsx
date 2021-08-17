import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { getDataBySlug, getSlugs } from '@/lib/mdx'
import { PostWithMdx } from '@/types'
import BlogBySlugPageRenderer from '@components/v2/blog/slug'
import Page from '@components/v2/layout/page'
import SEO from '@components/SEO'
import app from '@/config/app'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('_posts')

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string
  const post = await getDataBySlug('_posts', slug)

  return { props: { post } }
}

const BlogContentPage: NextPage<{ post: PostWithMdx }> = ({ post }) => {
  return (
    <Page>
      <SEO
        isPost
        title={post.title}
        description={post.summary}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: [app.socials.Twitter],
            section: 'Tech',
            tags: ['Tech', 'Blog', 'Dev blog']
          }
        }}
      />
      <BlogBySlugPageRenderer post={post} />
    </Page>
  )
}

export default BlogContentPage
