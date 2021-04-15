import { Container } from '@/utils/styles'
import ContentWrapper from '../ContentWrapper'
import PageSectionTitle from '../PageSectionTitle'
import SEO from '../SEO'
import Jumbotron from './Jumbotron'
import { Contents, ProjectTitle } from './module'
import ProjectList from './ProjectList'

export const ProjectsPageRenderer = () => {
  return (
    <>
      <ContentWrapper>
        <PageSectionTitle text="Projects" />
      </ContentWrapper>
      <ProjectList />
    </>
  )
}

export const ProjectBySlugRenderer = () => {
  return (
    <>
      <SEO title="TuanTanah" />
      <Jumbotron />
      <section css={[Container]}>
        <ProjectTitle />
        <Contents />
      </section>
    </>
  )
}
