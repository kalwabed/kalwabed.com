import 'twin.macro'

import { Jumbotron } from '@/components/Projects/module'
import { Container } from '@/utils/styles'
import SEO from '@/components/SEO'

const ProjectPage = () => {
  return (
    <>
      <SEO title="TuanTanah" />
      <Jumbotron />
      <section css={[Container]}>
        <p>the</p>
      </section>
    </>
  )
}

export default ProjectPage
