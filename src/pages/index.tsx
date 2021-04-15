import 'twin.macro'
import { GetStaticProps } from 'next'

import PageWrapper from '@/components/layout/PageWrapper'
import HomePageRenderer from '@/components/Home'
import { getAllMetaData } from '@/utils/mdx'
import { Post } from '@/types'

export default function HomePage(props: { posts: Post[] }) {
  return (
    <PageWrapper pageTitle="Home">
      <HomePageRenderer {...props} />
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllMetaData('_posts')

  console.log(posts)
  return { props: { posts } }
}
