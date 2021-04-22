import { ProjectWithMdx } from '@/types'
import { Container } from '@/utils/styles'
import SEO from '../SEO'
import Jumbotron from './Jumbotron'
import { ProjectDescription } from './module'
import Article from './Article'

const ProjectBySlugRenderer = (props: ProjectWithMdx) => {
  const { description, title, mdxSource } = props

  return (
    <>
      <SEO title={title} />
      <Jumbotron {...props} />
      <section css={[Container]}>
        <ProjectDescription description={description} />
        <Article mdxSource={mdxSource} />
      </section>
    </>
  )
}

export default ProjectBySlugRenderer
