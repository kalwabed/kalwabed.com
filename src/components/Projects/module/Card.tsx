import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'

import NextLink from '@/components/ui/NextLink'
import { CardStyle } from '@/utils/styles'

const Card = () => {
  return (
    <div css={[CardStyle, tw`w-80 h-80 m-auto`]}>
      <div tw="flex flex-col w-full h-full">
        <Image src="/static/tuantanah.png" width={320} height={150} alt="tuantanah" />
        <div tw="p-4 space-y-2">
          <Link href="/projects/tuantanah" passHref>
            <a tw="hocus:text-primary-400">
              <h3 tw="text-2xl font-bold transition ">Tuantanah</h3>
            </a>
          </Link>

          <p tw="font-light text-gray-500 tracking-wide">
            Lorem ipsum dolor sit adipisicing elit. consectetur, adipisicing elit.
          </p>

          <NextLink href="/projects/tuantanah" title="My project" withIcon>
            Visit project
          </NextLink>
        </div>
      </div>
    </div>
  )
}

export default Card
