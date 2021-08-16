import 'twin.macro'

import { Project } from '@/types'
import { Container } from '../shared/container'
import PageSection from '../shared/page-section'
import ProjectList from './project-list'

const ProjectsPageRenderer = ({ projects }: { projects: Project[] }) => {
  return (
    <div css={[Container]} tw="my-20">
      <PageSection title="Projects." subTitle="You’ve find my projects page" />
      <ProjectList projects={projects} />
    </div>
  )
}

export default ProjectsPageRenderer
