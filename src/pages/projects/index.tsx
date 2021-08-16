import type { GetStaticProps, NextPage } from 'next'

import { Project } from '@/types'
import { getAllFrontMatters } from '@/lib/mdx'
import Page from '@components/v2/layout/page'
import ProjectsPageRenderer from '@components/v2/projects'
import SEO from '@components/SEO'

// export const getStaticProps: GetStaticProps = async () => {
//   const projects = getAllFrontMatters('_projects')

//   return { props: { projects } }
// }

const ProjectsPage: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Page>
      <SEO title="Projects" description="Where my projects life" />
      <ProjectsPageRenderer />
    </Page>
  )
}

export default ProjectsPage
