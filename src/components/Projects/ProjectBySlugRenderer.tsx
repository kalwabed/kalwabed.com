import { ReactNode } from 'react'

import { ProjectMeta } from '@/types'
import { Container } from '@/utils/styles'
import SEO from '../SEO'
import Jumbotron from './Jumbotron'
import { ProjectDescription } from './module'

interface Props extends ProjectMeta {
  children: ReactNode
}

const ProjectBySlugRenderer = (props: Props) => {
  const { children, description, title } = props

  return (
    <>
      <SEO title={title} />
      <Jumbotron {...props} />
      <section css={[Container]}>
        <ProjectDescription description={description} />
        {children}
      </section>
    </>
  )
}

export default ProjectBySlugRenderer
