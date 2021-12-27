import 'twin.macro'

import { Container } from '../shared/container'
import Bio from './bio'

const AboutPageRenderer = () => {
  return (
    <div css={[Container]} tw="my-14">
      <section tw="px-0 md:px-10 lg:px-16 space-y-10">
        <h1 tw="text-5xl font-bold">About.</h1>
        <Bio />
      </section>
    </div>
  )
}

export default AboutPageRenderer
