import Image from 'next/image'

import TextLink from '~components/shared/text-link'

interface ContentProps {
  heading: string
  children: React.ReactNode
}

export const Content = ({ heading, children }: ContentProps) => {
  return (
    <section className="w-full md:w-3/4 lg:w-3/5 space-y-3">
      <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
      <div className="leading-relaxed tracking-wider text-gray-400 space-y-3">{children}</div>
    </section>
  )
}

type ContentWithImageProps = { image: string } & ContentProps

export const ContentWithImage = ({ image, children, heading }: ContentWithImageProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 lg:flex-row lg:justify-between lg:space-x-8 lg:space-y-0">
      <div className="w-full lg:w-1/2 space-y-3">
        <Image
          src={image}
          alt={heading}
          sizes="50vw"
          width={500}
          height={412}
          quality={90}
          className="rounded bg-subtleAppBg shadow"
        />
      </div>
      <section className="w-full lg:w-1/2 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
        <div className="leading-relaxed tracking-wider text-gray-400 space-y-3">{children}</div>
      </section>
    </div>
  )
}

interface JustImagesProps {
  images?: string[]
  label?: string
  children?: React.ReactNode
  height?: number
  width?: number
}
export const JustImages = (props: JustImagesProps) => {
  const { height, images, label, width } = props

  if (images?.length === 1) {
    return (
      <figure className="flex flex-col mx-auto justify-center items-center space-y-1">
        <div className="w-full overflow-hidden">
          <Image
            src={images[0]}
            sizes="100vw"
            alt={label || 'image'}
            width={width || 1200}
            height={height || 560}
            quality={90}
            className="rounded bg-subtleAppBg w-full"
          />
        </div>
        <figcaption className="text-sm">{label}</figcaption>
      </figure>
    )
  }

  return (
    <figure className="mx-auto justify-center items-center space-y-1 grid grid-cols-1 lg:grid-cols-2 gap-2">
      {images?.map(image => (
        <div className="w-full overflow-hidden" key={image.replace('/static/projects', '')}>
          <Image
            src={image}
            alt={label || 'image'}
            width={600}
            height={580}
            quality={90}
            className="rounded bg-subtleAppBg w-full shadow"
          />
        </div>
      ))}
    </figure>
  )
}

export const Link = ({ text, href }) => {
  return <TextLink href={href}>{text}</TextLink>
}
