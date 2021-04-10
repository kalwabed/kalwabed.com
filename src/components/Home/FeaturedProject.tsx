import 'twin.macro'
import Image from 'next/image'

import NextLink from '../ui/NextLink'
import { SectionTitle, ContentWrapper } from './module'

const FeaturedProject = () => {
  return (
    <ContentWrapper>
      <SectionTitle title="Featured project" />

      <div tw="relative rounded overflow-hidden border border-transparent bg-gray-100 shadow-lg hover:shadow-xl transition">
        <Image src="/static/tuantanah.png" alt="TuanTanah" height={310} width={638} quality={95} />

        <div tw="px-5 pt-3 pb-5 space-y-2">
          <p tw="font-bold text-2xl md:text-3xl">Lorem ipsum dolor, sit amet</p>
          <p tw="text-gray-500 text-sm tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minus exercitationem eveniet aliquam iusto
            consequuntur, ipsam illum est blanditiis nulla nesciunt, dolorem ducimus voluptatibus debitis, nostrum rerum
            sunt. Facilis, quos?
          </p>
          <div>
            <NextLink size="lg" href="/projects" label="Visit project" withIcon />
          </div>
        </div>
      </div>

      <div tw="flex justify-center items-center mx-auto">
        <NextLink label="More projects" href="/projects" />
      </div>
    </ContentWrapper>
  )
}

export default FeaturedProject
