import 'twin.macro'
import Image from 'next/image'

import { HomeContentWrapper } from '@/utils/styles'
import NextLink from '../ui/NextLink'
import SectionTitle from './module/SectionTitle'

const FeaturedProject = () => {
  return (
    <section css={[HomeContentWrapper]}>
      <SectionTitle title="Featured project" />

      <div tw="relative rounded overflow-hidden border bg-gray-100 shadow-lg hover:shadow-xl">
        <Image src="/static/tuantanah.png" alt="TuanTanah" height={256} width={512} />

        <div tw="px-5 py-4 space-y-2">
          <p tw="font-bold text-2xl">Lorem ipsum dolor, sit amet</p>
          <p tw="text-gray-500 text-sm tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minus exercitationem eveniet aliquam iusto
            consequuntur, ipsam illum est blanditiis nulla nesciunt, dolorem ducimus voluptatibus debitis, nostrum rerum
            sunt. Facilis, quos?
          </p>
          <div>
            <NextLink size="lg" href="/projects" label="Visit project" />
          </div>
        </div>
        {/* <button tw="px-4 py-1 bg-primary-500 hover:bg-primary-400 focus:(outline-none ring-2 ring-primary-500 ring-offset-2 ring-offset-primary-200) text-white transition duration-200 text-center font-semibold shadow-md rounded-md">
              Visit project
            </button> */}
      </div>

      <div tw="flex justify-center items-center mx-auto">
        <NextLink label="More projects" href="/projects" />
      </div>
    </section>
  )
}

export default FeaturedProject
