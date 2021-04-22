import dynamic from 'next/dynamic'
import tw from 'twin.macro'

const Card = dynamic(() => import('./module/Card'))
import { Project } from '@/types'

const Wrapper = tw.div`
mt-10
flex
justify-center
items-center
md:max-w-screen-xl
`

const Grid = tw.div`
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-10
`

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <Wrapper>
      <Grid>
        {projects.map(project => (
          <Card key={project.slug} {...project} />
        ))}
      </Grid>
    </Wrapper>
  )
}

export default ProjectList
