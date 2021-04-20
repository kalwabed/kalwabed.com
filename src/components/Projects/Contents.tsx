import tw from 'twin.macro'
import Image from 'next/image'
import { ReactNode } from 'react'

interface ContentProps {
  heading: string
  children: ReactNode
}

export const Content = (props: ContentProps) => {
  const { heading, children } = props

  return (
    <div tw="w-full md:w-3/4 space-y-3">
      <h1 tw="text-4xl font-bold">{heading}</h1>
      <p tw="leading-relaxed tracking-wider text-gray-500">{children}</p>
    </div>
  )
}

const WithImageWrapper = tw.section`
flex flex-col
justify-center
lg:flex-row
items-center
my-24
space-y-2
`

interface ContentWithImageProps extends ContentProps {
  image: string
}

export const ContentWithImage = (props: ContentWithImageProps) => {
  const { children, heading, image } = props

  return (
    <WithImageWrapper>
      <div tw="w-full lg:w-1/2 overflow-hidden">
        <Image src={image} alt="aku" width={500} height={412} tw="rounded bg-slate" />
      </div>
      <div tw="w-full lg:w-1/2 space-y-3">
        <h1 tw="text-4xl font-bold">{heading}</h1>
        <p tw="leading-relaxed tracking-wider text-gray-500">{children}</p>
      </div>
    </WithImageWrapper>
  )
}
