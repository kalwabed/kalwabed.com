import 'twin.macro'

import { ProjectWithMdx } from '@/types'
import ProjectHeader from './project-header'
import ProjectContent from './project-content'

const ProjectPageRenderer = ({ project }: { project: ProjectWithMdx }) => {
  return (
    <div tw="space-y-12 mb-10">
      <ProjectHeader project={project} />
      <ProjectContent mdxSource={project.mdxSource} />
    </div>
  )
}

export default ProjectPageRenderer
