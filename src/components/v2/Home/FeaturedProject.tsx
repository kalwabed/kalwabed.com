import tw from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'

import NextLink from '../shared/NextLink'
import { SectionTitle, MoreLink } from './modules'
import ContentWrapper from '@components/ContentWrapper'
import { Project } from '@/types'

const Wrapper = tw.div`
relative
rounded
overflow-hidden
border border-transparent
bg-gray-100 dark:bg-slate
shadow-lg hover:shadow-xl
transition
`

const FeaturedProject = ({ project }: { project: Project }) => {
  const { banner, shortDescription, title, slug } = project

  return (
    <ContentWrapper>
      <SectionTitle title="Featured project" />

      <Wrapper>
        <Image src={banner} height={310} width={638} quality={95} alt={title} />

        <div tw="px-5 pt-3 pb-5 space-y-2">
          <Link href={`/projects/${slug}`} passHref>
            <a tw="hocus:text-brand-400 transition" className="umami--click--featured-project">
              <h3 tw="font-bold text-2xl md:text-3xl">{title}</h3>
            </a>
          </Link>
          <p tw="text-gray-600 dark:text-gray-300 text-sm tracking-wide">{shortDescription}</p>
          <div>
            <NextLink
              className="umami--click--featured-project"
              size="lg"
              href={`/projects/${slug}`}
              title="Visit project"
            >
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
