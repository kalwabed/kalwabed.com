import 'twin.macro'

import { Container } from '../shared/container'
import PageSection from '../shared/page-section'
import ProjectList from './project-list'

const ProjectsPageRenderer = () => {
  return (
    <div css={[Container]} tw="my-20">
      <PageSection title="Projects." subTitle="You’ve find my projects page" />
      <ProjectList />
    </div>
  )
}

export default ProjectsPageRenderer
