import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import PostContent from '~components/blog/post-content'
import PostHeader from '~components/blog/post-header'
import SEO from '~components/SEO'
import Container from '~components/shared/container'
import appConfig from '~config/app'
import { getDataBySlug, getSlugs } from '~lib/mdx'
import { PostWithMdx } from '~types'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('_posts')

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = await getDataBySlug('_posts', slug)

  return { props: { post } }
}

const BlogContentPage: NextPage<{ post: PostWithMdx }> = ({ post }) => {
  return (
    <Container>
      <SEO
        isPost
        title={post.title}
        description={post.summary}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: [appConfig.socials.Twitter],
            section: 'Tech',
            tags: ['Tech', 'Blog', 'Dev blog']
          }
        }}
      />
      <PostHeader publishedAt={post.publishedAt} title={post.title} />
      <PostContent content={post.mdxSource} />
    </Container>
  )
}

export default BlogContentPage
