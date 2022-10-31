import ProjectList from '~components/projects/project-list'
import Container from '~components/shared/container'
import PageSection from '~components/shared/page-section'
import { getAllFrontMatters } from '~lib/mdx'

async function loader() {
  const projects = getAllFrontMatters('_projects')

  return projects
}

const ProjectsPage = async () => {
  const projects = await loader()

  return (
    <Container className="my-20">
      <PageSection title="Projects." subTitle="Where I show off my projects. More on my Github" />
      <ProjectList projects={projects} />
    </Container>
  )
}

export default ProjectsPage
