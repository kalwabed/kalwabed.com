import tw from 'twin.macro'
import Link, { LinkProps } from 'next/link'
import { Interpolation, Theme } from '@emotion/react'

const BaseButton = tw.a`
font-bold
tracking-wide
border
transition
focus:ring
inline-flex
py-1
px-4
rounded
items-center
no-underline
outline-none
`

const variants = {
  outline: tw`text-lowContrast border-bdr-idle hover:(bg-btn-hover border-bdr-hover) focus:(ring-bdr-idle bg-btn-active)`
}

interface Props {
  link?: LinkProps
  href: string
  title?: string
  variant?: 'outline'
  styles?: Interpolation<Theme>
  className?: string
  isExternal?: boolean
}

const ButtonLink: React.FC<Props> = props => {
  const { variant = 'outline', styles, className, title, href, isExternal } = props

  if (isExternal) {
    return (
      <Link {...props.link} href={href} passHref>
        <BaseButton
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          className={className}
          css={[variants[variant], styles]}
        >
          {props.children}
        </BaseButton>
      </Link>
    )
  }

  return (
    <Link {...props.link} href={href} passHref>
      <BaseButton title={title} className={className} css={[variants[variant], styles]}>
        {props.children}
      </BaseButton>
    </Link>
  )
}

export default ButtonLink
