import 'twin.macro'
import Image from 'next/image'

import { HomeWrapper, HomeContentWrapper } from '@/utils/styles'
import NextLink from '../ui/NextLink'

const FeaturedProjects = () => {
  return (
    <section css={[HomeWrapper]}>
      <span tw="font-bold text-sm">Featured projects</span>

      <div css={[HomeContentWrapper]}>
        <div tw="relative rounded overflow-hidden border">
          <Image src="/static/tuantanah.png" alt="TuanTanah" height={256} width={512} />

          <div tw="px-5 py-4 space-y-2">
            <p tw="font-bold text-xl -mt-2">Lorem ipsum dolor sit amet consectetur</p>
            <p tw="text-gray-500 text-sm tracking-wide">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minus exercitationem eveniet aliquam iusto
              consequuntur, ipsam illum est blanditiis nulla nesciunt, dolorem ducimus voluptatibus debitis, nostrum
              rerum sunt. Facilis, quos?
            </p>
            <div>
              <NextLink size="xl" href="/projects" label="Visit project" />
            </div>
          </div>
        </div>

        {/* <button tw="px-4 py-1 bg-primary-500 hover:bg-primary-400 focus:(outline-none ring-2 ring-primary-500 ring-offset-2 ring-offset-primary-200) text-white transition duration-200 text-center font-semibold shadow-md rounded-md">
              Visit project
            </button> */}
      </div>
    </section>
  )
}

export default FeaturedProjects
