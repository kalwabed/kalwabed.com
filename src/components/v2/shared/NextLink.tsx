import { ReactNode } from 'react'
import tw from 'twin.macro'
import Link, { LinkProps } from 'next/link'
import { Interpolation, Theme } from '@emotion/react'

const TwButtonLink = tw.a`
text-lowContrast
font-bold
tracking-wide
border
border-v2-borderIdle
transition
hover:(bg-v2-hover border-v2-borderHover)
focus:(ring ring-v2-borderIdle bg-v2-active)
inline-flex
py-1
px-4
rounded
items-center
no-underline
outline-none
`

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
  type?: 'button' | 'text'
  variant?: 'solid' | 'outline'
  className?: string
  title?: string
  href: string
  children: ReactNode
  styles?: Interpolation<Theme>
}

const NextLink = (props: NextLinkProps) => {
  const { type = 'text' } = props

  if (type === 'button') {
    return (
      <Link {...props.link} href={props.href} passHref>
        <TwButtonLink>{props.children}</TwButtonLink>
      </Link>
    )
  }

  return (
    <Link {...props.link} href={props.href} passHref>
      <TwTextLink {...props} css={props.styles}>
        {props.children}
      </TwTextLink>
    </Link>
  )
}

export default NextLink
