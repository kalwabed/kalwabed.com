import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'

import { Container } from '../shared/Container'
import { SectionTitle } from './modules'
import FeaturedBanner from '@components/v2/home/assets/featured-project-banner.png'
import NextLink from '../shared/NextLink'

const _Wrapper = tw.div`
w-full
flex justify-between
bg-subtleAppBg
border border-appBorder
overflow-hidden
rounded-lg
shadow
`

const FeaturedProject = ({ project }) => {
  return (
    <section css={[Container]}>
      <SectionTitle title="Featured project" />

      <_Wrapper>
        <Image src={FeaturedBanner} alt="Featured project banner" placeholder="blur" />
        <section tw="w-full p-8 flex flex-col">
          <Link href="/projects/tuantanah" passHref>
            <a tw="text-4xl font-bold transition hocus:text-link">
              <h2>TuanTanah</h2>
            </a>
          </Link>
          <small tw="text-sm text-lowContrast mt-3.5">React, Next.js, MongoDB, Express.js</small>
          <p tw="text-lowContrast mt-11">
            A web application that is intended as a meeting place between land sellers and potential buyers.
          </p>
          <div tw="mt-auto">
            <NextLink href="/project/tuantanah">More detail</NextLink>
          </div>
        </section>
      </_Wrapper>
    </section>
  )
}

export default FeaturedProject
