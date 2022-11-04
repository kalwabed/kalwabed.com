import type { GetStaticProps, NextPage } from 'next'

import ProjectList from '~components/projects/project-list'
import SEO from '~components/SEO'
import Container from '~components/shared/container'
import PageSection from '~components/shared/page-section'
import { getAllFrontMatters } from '~lib/mdx'
import { Project } from '~types'

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllFrontMatters('_projects')

  return { props: { projects } }
}

const ProjectsPage: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Container className="my-20">
      <SEO title="Projects" description="Where I show off my projects." />

      <PageSection title="Projects." subTitle="Where I show off my projects. More on my Github" />
      <ProjectList projects={projects} />
    </Container>
  )
}

export default ProjectsPage
