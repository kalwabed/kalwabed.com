import tw from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'

import NextLink from '../ui/NextLink'
import { SectionTitle, MoreLink } from './module'
import ContentWrapper from '../ContentWrapper'
import { Project } from '@/types'

const Wrapper = tw.div`
relative
rounded
overflow-hidden
border border-transparent
bg-gray-100
shadow-lg hover:shadow-xl
transition
`

const FeaturedProject = ({ project }: { project: Project }) => {
  const { banner, shortDescription, title, slug } = project

  return (
    <ContentWrapper>
      <SectionTitle title="Featured project" />

      <Wrapper>
        <Image src={banner} alt={title} height={310} width={638} quality={95} />

        <div tw="px-5 pt-3 pb-5 space-y-2">
          <Link href={`/projects/${slug}`} passHref>
            <a tw="hocus:text-primary-400 transition">
              <h3 tw="font-bold text-2xl md:text-3xl">{title}</h3>
            </a>
          </Link>
          <p tw="text-gray-600 text-sm tracking-wide">{shortDescription}</p>
          <div>
            <NextLink size="lg" href={`/projects/${slug}`} title="Visit project" withIcon>
              Visit project
            </NextLink>
          </div>
        </div>
      </Wrapper>

      <MoreLink type="projects" />
    </ContentWrapper>
  )
}

export default FeaturedProject
