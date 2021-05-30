import tw from 'twin.macro'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { TwLink } from '../ui/NextLink'

interface ContentProps {
  heading: string
  children: ReactNode
}

const ParagraphWrapper = tw.div`
leading-relaxed
tracking-wider
text-gray-500 dark:text-gray-300
space-y-3
`

export const Content = (props: ContentProps) => {
  const { heading, children } = props

  return (
    <section tw="w-full md:w-3/4 lg:w-3/5 space-y-3">
      <h1 tw="text-4xl font-bold">{heading}</h1>
      <ParagraphWrapper>{children}</ParagraphWrapper>
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
        <ParagraphWrapper>{children}</ParagraphWrapper>
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

const JustImageWrapper = tw.figure`
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
        <a href={images[0]} tw="w-full overflow-hidden" rel="noopener noreferrer" target="_blank">
          <Image
            src={images[0]}
            alt={label || 'image'}
            width={width || 1200}
            height={height || 560}
            quality={90}
            tw="rounded bg-slate w-full"
          />
        </a>
        <figcaption tw="text-sm">{label}</figcaption>
      </JustImageWrapper>
    )
  }

  return (
    <JustImageWrapper css={[tw`grid grid-cols-1 lg:grid-cols-2 gap-2`]}>
      {images?.map(image => (
        <a
          href={image}
          tw="w-full overflow-hidden"
          key={image.replace('/static/projects', '')}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={image}
            alt={label || 'image'}
            width={600}
            height={580}
            quality={90}
            tw="rounded bg-slate w-full shadow"
          />
        </a>
      ))}
    </JustImageWrapper>
  )
}

export const Link = ({ text, href, children }) => {
  return <TwLink href={href}>{text}</TwLink>
}
