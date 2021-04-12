import 'twin.macro'

import Wrapper from '@/components/layout/Wrapper'
import HomePageRenderer from '@/components/Home'

export default function HomePage() {
  return (
    <Wrapper pageTitle="Home">
      <HomePageRenderer />
    </Wrapper>
  )
}
