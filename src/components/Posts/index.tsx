import { Container } from '@/utils/styles'
import ContentWrapper from '../ContentWrapper'
import PageWrapper from '../layout/PageWrapper'
import SEO from '../SEO'
import Article from './Article'
import PostHeader from './PostHeader'
import PostList from './PostList'
import PostsHeader from './PostsHeader'

export const PostsPageRenderer = () => {
  return (
    <section css={[Container]}>
      <SEO title="Posts" />
      <PostsHeader />
      <PostList />
    </section>
  )
}

export const PostBySlugRenderer = () => {
  return (
    <PageWrapper pageTitle="TuanTanah">
      <ContentWrapper>
        <PostHeader />
        <Article />
      </ContentWrapper>
    </PageWrapper>
  )
}
