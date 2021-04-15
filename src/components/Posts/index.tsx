import { Container } from '@/utils/styles'
import ContentWrapper from '../ContentWrapper'
import PageWrapper from '../layout/PageWrapper'
import SEO from '../SEO'
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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium laborum tenetur ipsam obcaecati
          nam suscipit necessitatibus fuga sunt earum veniam deserunt, recusandae quia aliquid at tempore rem architecto
          odit.
        </p>
      </ContentWrapper>
    </PageWrapper>
  )
}
