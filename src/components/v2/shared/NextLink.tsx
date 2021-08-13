import { ReactNode } from 'react'
import tw from 'twin.macro'
import Link, { LinkProps } from 'next/link'
import { Interpolation, Theme } from '@emotion/react'

const TwTextLink = tw.a`
text-link
font-bold
border-bottom-width[3px] border-transparent
no-underline
transition
hover:(text-highContrast border-link)
focus:(ring ring-link outline-none)
inline-flex
items-center
`

interface NextLinkProps {
  link?: LinkProps
  className?: string
  title?: string
  href: string
  children: ReactNode
  styles?: Interpolation<Theme>
}

const NextLink = (props: NextLinkProps) => {
  return (
    <Link {...props.link} href={props.href} passHref>
      <TwTextLink {...props} css={props.styles}>
        {props.children}
      </TwTextLink>
    </Link>
  )
}

export default NextLink
