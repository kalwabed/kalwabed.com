import { ReactNode } from 'react'
import tw from 'twin.macro'
import Link, { LinkProps } from 'next/link'
import { Interpolation, Theme } from '@emotion/react'

const TwTextLink = tw.a`
relative
font-bold
no-underline
transition
inline-flex
items-center
focus:(before:h-1 outline-none)
before:(absolute bottom-0 top[21px] left-0 opacity-0 transition duration-300 w-full h-0.5 bg-link content)
hocus:before:opacity-100
`

const variants = {
  primary: tw`text-link`,
  ghost: tw`text-highContrast before:hidden hocus:text-link`
}

const sizes = {
  md: tw`text-base`,
  lg: tw`text-4xl`
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
  size?: keyof typeof sizes
}

const TextLink = (props: NextLinkProps) => {
  const { variant = 'primary', size = 'md', isExternal } = props

  if (isExternal) {
    return (
      <Link {...props.link} href={props.href} passHref>
        <TwTextLink
          target="_blank"
          rel="noopener noreferrer"
          css={[variants[variant], sizes[size], props.styles]}
          {...props}
        >
          {props.children}
        </TwTextLink>
      </Link>
    )
  }

  return (
    <Link {...props.link} href={props.href} passHref>
      <TwTextLink css={[variants[variant], sizes[size], props.styles]} {...props}>
        {props.children}
      </TwTextLink>
    </Link>
  )
}

export default TextLink
