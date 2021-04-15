import { useState } from 'react'

import type { Post, PostWithMdx } from '@/types'
import { Container } from '@/utils/styles'
import ContentWrapper from '../ContentWrapper'
import PageWrapper from '../layout/PageWrapper'
import SEO from '../SEO'
import Article from './Article'
import PostHeader from './PostHeader'
import PostList from './PostList'
import PostsHeader from './PostsHeader'

export const PostsPageRenderer = ({ posts }: { posts: Post[] }) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <section css={[Container]}>
      <SEO title="Posts" />
      <PostsHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <PostList posts={posts} searchValue={searchValue} />
    </section>
  )
}

export const PostBySlugRenderer = ({ post }: { post: PostWithMdx }) => {
  return (
    <PageWrapper pageTitle="TuanTanah">
      <ContentWrapper>
        <PostHeader publishedAt={post.publishedAt} title={post.title} />
        <Article content={post.mdxSource} />
      </ContentWrapper>
    </PageWrapper>
  )
}
