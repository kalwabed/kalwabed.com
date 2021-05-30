import tw from 'twin.macro'

import { ProjectWithMdx } from '@/types'
import { Container } from '@/utils/styles'
import SEO from '../SEO'
import Jumbotron from './Jumbotron'
import { ProjectDescription } from './modules'
import Article from './Article'

const ProjectBySlugRenderer = (props: ProjectWithMdx) => {
  const { description, title, mdxSource, shortDescription } = props

  return (
    <>
      <SEO title={title} description={shortDescription} />
      <Jumbotron {...props} />
      <section css={[Container, tw`mb-12`]}>
        <ProjectDescription description={description} />
        <Article mdxSource={mdxSource} />
      </section>
    </>
  )
}

export default ProjectBySlugRenderer
