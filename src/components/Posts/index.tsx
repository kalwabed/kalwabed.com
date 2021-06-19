import { useState } from 'react'
import 'twin.macro'

import type { Post } from '@/types'
import { Container } from '@/utils/styles'
import SEO from '../SEO'
import PostList from './PostList'
import PostsHeader from './PostsHeader'
import app from '@/config/app'

const PostsPageRenderer = ({ posts }: { posts: Post[] }) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <section css={[Container]}>
      <SEO title={app.pageMeta.posts.pageTitle} description={app.pageMeta.posts.pageDescription} />
      <PostsHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <PostList posts={posts} searchValue={searchValue} />
    </section>
  )
}

export default PostsPageRenderer
