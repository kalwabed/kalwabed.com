import 'twin.macro'

import ProjectCard from './modules/project-card'

const ProjectList = () => {
  return (
    <div tw="grid grid-rows-1 gap-20">
      {[1, 2, 3].map(project => (
        <ProjectCard key={project} />
      ))}
    </div>
  )
}

export default ProjectList
