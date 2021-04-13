import tw from 'twin.macro'

import { Card } from './module'

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

const ProjectList = () => {
  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4, 5, 6, 7].map(key => (
          <Card key={key} />
        ))}
      </Grid>
    </Wrapper>
  )
}

export default ProjectList
