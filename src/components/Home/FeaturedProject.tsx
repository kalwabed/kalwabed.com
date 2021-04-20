import 'twin.macro'
import Image from 'next/image'

import NextLink from '../ui/NextLink'
import { SectionTitle, MoreLink } from './module'
import ContentWrapper from '../ContentWrapper'

const FeaturedProject = () => {
  return (
    <ContentWrapper>
      <SectionTitle title="Featured project" />

      <div tw="relative rounded overflow-hidden border border-transparent bg-gray-100 shadow-lg hover:shadow-xl transition">
        <Image src="/static/projects/tuantanah/banner.png" alt="TuanTanah" height={310} width={638} quality={95} />

        <div tw="px-5 pt-3 pb-5 space-y-2">
          <p tw="font-bold text-2xl md:text-3xl">Lorem ipsum dolor, sit amet</p>
          <p tw="text-gray-500 text-sm tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minus exercitationem eveniet aliquam iusto
            consequuntur, ipsam illum est blanditiis nulla nesciunt, dolorem ducimus voluptatibus debitis, nostrum rerum
            sunt. Facilis, quos?
          </p>
          <div>
            <NextLink size="lg" href="/projects" title="Visit project" withIcon>
              Visit project
            </NextLink>
          </div>
        </div>
      </div>

      <MoreLink type="projects" />
    </ContentWrapper>
  )
}

export default FeaturedProject
