import tw from 'twin.macro'
import Image from 'next/image'
import type { ReactNode } from 'react'

interface ContentProps {
  heading: string
  children: ReactNode
}

export const Content = (props: ContentProps) => {
  const { heading, children } = props

  return (
    <section tw="w-full md:w-3/4 lg:w-3/5 space-y-3">
      <h1 tw="text-4xl font-bold">{heading}</h1>
      <div tw="leading-relaxed tracking-wider text-gray-500 space-y-3">{children}</div>
    </section>
  )
}

const WithImageWrapper = tw.section`
flex flex-col
justify-center
lg:flex-row
items-center
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
        <Image src={image} alt={heading} width={500} height={412} quality={90} tw="rounded bg-slate w-full" />
      </div>
      <div tw="w-full lg:w-1/2 space-y-3">
        <h1 tw="text-4xl font-bold">{heading}</h1>
        <div tw="leading-relaxed tracking-wider text-gray-500 space-y-3">{children}</div>
      </div>
    </WithImageWrapper>
  )
}

interface JustImagesProps {
  images?: string[]
  children?: ReactNode
  label?: string
  height?: number
  width?: number
}

const JustImageWrapper = tw.section`
flex flex-col
mx-auto
justify-center
items-center
space-y-1
`

export const JustImages = (props: JustImagesProps) => {
  const { images, label, height, width } = props

  if (images?.length === 1) {
    return (
      <JustImageWrapper>
        <div tw="w-full overflow-hidden">
          <Image
            src={images[0]}
            alt={label || 'image'}
            width={width || 1200}
            height={height || 560}
            quality={100}
            tw="rounded bg-slate w-full"
          />
        </div>
        <p tw="text-sm">{label}</p>
      </JustImageWrapper>
    )
  }

  return (
    <JustImageWrapper css={[tw`grid grid-cols-1 lg:grid-cols-2 gap-2`]}>
      {images?.map(image => (
        <div tw="w-full overflow-hidden" key={image.replace('/static/projects', '')}>
          <Image
            src={image}
            alt={label || 'image'}
            width={600}
            height={580}
            quality={90}
            tw="rounded bg-slate w-full shadow"
          />
        </div>
      ))}
    </JustImageWrapper>
  )
}
