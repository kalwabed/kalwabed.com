import 'twin.macro'

import { Container } from '../shared/container'
import PageSection from '../shared/page-section'

const ProjectsPageRenderer = () => {
  return (
    <div css={[Container]} tw="my-20">
      <PageSection title="Projects." subTitle="You’ve find my projects page" />
    </div>
  )
}

export default ProjectsPageRenderer
