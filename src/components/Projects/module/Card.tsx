import { memo } from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'

import NextLink from '@/components/ui/NextLink'
import { CardStyle } from '@/utils/styles'
import { Project } from '@/types'

interface Props extends Partial<Project> {}

const Card = (props: Props) => {
  const { banner, shortDescription, slug, title } = props

  return (
    <div css={[CardStyle, tw`w-80 h-80 m-auto`]}>
      <div tw="flex flex-col w-full h-full">
        <Image src={banner} width={320} height={150} alt={slug} />
        <div tw="p-4 space-y-2">
          <Link href={`/projects/${slug}`} passHref>
            <a tw="hocus:text-primary-400">
              <h3 tw="text-2xl font-bold transition ">{title}</h3>
            </a>
          </Link>

          <p tw="font-light text-gray-500 tracking-wide">{shortDescription}</p>

          <NextLink href={`/projects/${slug}`} title="Project page" withIcon>
            Visit project
          </NextLink>
        </div>
      </div>
    </div>
  )
}

export default memo(Card)
