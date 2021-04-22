import { ProjectMeta } from '@/types'
import ContentWrapper from '../ContentWrapper'
import PageSectionTitle from '../PageSectionTitle'
import ProjectList from './ProjectList'

const ProjectsPageRenderer = ({ projects }: { projects: ProjectMeta[] }) => {
  return (
    <>
      <ContentWrapper>
        <PageSectionTitle text="Projects" />
      </ContentWrapper>
      <ProjectList projects={projects} />
    </>
  )
}

export default ProjectsPageRenderer
