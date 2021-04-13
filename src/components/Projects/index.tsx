import ContentWrapper from '../ContentWrapper'
import PageSectionTitle from '../PageSectionTitle'
import ProjectList from './ProjectList'

const ProjectsPageRenderer = () => {
  return (
    <>
      <ContentWrapper>
        <PageSectionTitle text="Projects" />
      </ContentWrapper>
      <ProjectList />
    </>
  )
}

export default ProjectsPageRenderer
