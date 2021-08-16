import { ReactNode } from 'react'
import tw from 'twin.macro'
import Link, { LinkProps } from 'next/link'
import { Interpolation, Theme } from '@emotion/react'

const TwTextLink = tw.a`
font-bold
no-underline
transition
focus:(ring outline-none)
inline-flex
items-center
`

const variants = {
  primary: tw`text-link border-bottom-width[3px] border-transparent hover:(text-highContrast border-link) focus:ring-link`,
  ghost: tw`text-highContrast hocus:(text-link) focus:ring-link`
}

interface NextLinkProps {
  link?: LinkProps
  className?: string
  title?: string
  href: string
  children: ReactNode
  styles?: Interpolation<Theme>
  variant?: 'primary' | 'ghost'
  isExternal?: boolean
  onClick?: () => void
}

const TextLink = (props: NextLinkProps) => {
  const { variant = 'primary', isExternal } = props

  if (isExternal) {
    return (
      <Link {...props.link} href={props.href} passHref>
        <TwTextLink target="_blank" rel="noopener noreferrer" {...props} css={[variants[variant], props.styles]}>
          {props.children}
        </TwTextLink>
      </Link>
    )
  }

  return (
    <Link {...props.link} href={props.href} passHref>
      <TwTextLink {...props} css={[variants[variant], props.styles]}>
        {props.children}
      </TwTextLink>
    </Link>
  )
}

export default TextLink
