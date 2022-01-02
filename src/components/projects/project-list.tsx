import { Project } from '~types'
import ProjectCard from './project-card'

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-rows-1 gap-20">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
