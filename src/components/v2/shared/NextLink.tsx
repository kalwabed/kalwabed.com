import { ReactNode } from 'react'
import tw from 'twin.macro'
import Link, { LinkProps } from 'next/link'

interface NextLinkProps {
  link?: LinkProps
  type: 'button' | 'text'
  variant?: 'solid' | 'outline'
  className?: string
  title?: string
  href: string
  children: ReactNode
}

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
px-1.5
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
focus:(ring ring-link)
inline-flex
items-center
`

const NextLink = (props: NextLinkProps) => {
  if (props.type === 'button') {
    return (
      <Link {...props.link} href={props.href} passHref>
        <TwButtonLink>{props.children}</TwButtonLink>
      </Link>
    )
  }

  return (
    <Link {...props.link} href={props.href} passHref>
      <TwTextLink {...props}>{props.children}</TwTextLink>
    </Link>
  )
}

export default NextLink
