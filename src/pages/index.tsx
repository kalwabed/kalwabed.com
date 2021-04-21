import type { GetStaticProps } from 'next'

import PageWrapper from '@/components/layout/PageWrapper'
import HomePageRenderer from '@/components/Home'
import { getAllFrontMatters } from '@/utils/mdx'
import { Bookmarks, Post } from '@/types'
import bookmarkProvider from '@/utils/bookmarkProvider'

export default function HomePage(props: { posts: Post[]; bookmarks: Bookmarks[] }) {
  return (
    <PageWrapper pageTitle="Home">
      <HomePageRenderer {...props} />
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFrontMatters('_posts')
  const bookmarks = await bookmarkProvider()

  return { props: { posts, bookmarks } }
}
