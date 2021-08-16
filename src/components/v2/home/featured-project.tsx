import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'

import { Container } from '../shared/container'
import { MoreLink, SectionTitle } from './modules'
import FeaturedBanner from '@components/v2/home/assets/featured-project-banner.png'
import TextLink from '../shared/text-link'
import { Project } from '@/types'

const _Wrapper = tw.div`
w-full
flex justify-between
flex-col lg:flex-row
bg-subtleAppBg
border border-appBorder
overflow-hidden
rounded-lg
shadow
`

const FeaturedProject: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <section css={[Container]}>
      <SectionTitle title="Featured project" />

      <_Wrapper>
        <Image src={FeaturedBanner} alt="Featured project banner" placeholder="blur" />
        <section tw="w-full p-6 lg:p-8 flex flex-col">
          <Link href="/projects/tuantanah" passHref>
            <a tw="text-4xl font-bold transition hocus:text-link">
              <h2>TuanTanah</h2>
            </a>
          </Link>
          <small tw="text-sm text-lowContrast mt-2 lg:mt-3.5">React, Next.js, MongoDB, Express.js</small>
          <p tw="text-lowContrast mt-6 lg:mt-11">
            A web application that is intended as a meeting place between land sellers and potential buyers.
          </p>
          <div tw="mt-6 lg:mt-auto">
            <TextLink href="/projects/tuantanah">More detail</TextLink>
          </div>
        </section>
      </_Wrapper>
      <MoreLink type="projects" />
    </section>
  )
}

export default FeaturedProject
