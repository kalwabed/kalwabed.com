import 'twin.macro'

import ContentWrapper from '../ContentWrapper'
import PageWrapper from '../layout/PageWrapper'
import Article from './Article'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import dateFormatter from '@/utils/dateFormatter'
import type { PostWithMdx } from '@/types'
import SEO from '../SEO'
import app from '@/config/app'

const PostBySlugRenderer = ({ post }: { post: PostWithMdx }) => {
  const { publishedAt, updatedAt, title, mdxSource, slug, summary } = post

  return (
    <PageWrapper withSEO={false}>
      <SEO
        isPost
        title={title}
        description={summary}
        openGraph={{
          title: title.concat(' | Kalwabed'),
          description: summary,
          type: 'article',
          article: {
            authors: [app.socials.Twitter],
            publishedTime: dateFormatter(publishedAt).ISO,
            modifiedTime: dateFormatter(updatedAt).ISO,
            section: 'Tech',
            tags: ['Tech', 'Blog', 'News', 'Story', 'Javascript']
          }
        }}
      />
      <ContentWrapper>
        <PostHeader publishedAt={publishedAt} title={title} />
      </ContentWrapper>
      <Article content={mdxSource} />

      <section tw="flex items-start px-0 md:px-0 lg:px-64 mt-6">
        <PostFooter title={title} slug={slug} updatedAt={updatedAt} />
      </section>
    </PageWrapper>
  )
}

export default PostBySlugRenderer
