import 'twin.macro'

import NextLink from '../ui/NextLink'
import ContentWrapper from '../ContentWrapper'
import { MoreLink, SectionTitle } from './module'
import { Post } from '@/types'

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <ContentWrapper>
      <SectionTitle title="Recent posts" />
      {posts?.map(post => (
        <div tw="flex flex-col space-y-1 lg:pr-12" key={post.slug}>
          <p>{post.publishedAt}</p>
          <NextLink size="xl" href={'/posts/' + post.slug} title={post.title}>
            {post.title}
          </NextLink>
          <p tw="text-sm">{post.summary}</p>
        </div>
      ))}

      <MoreLink type="posts" />
    </ContentWrapper>
  )
}

export default RecentPosts
