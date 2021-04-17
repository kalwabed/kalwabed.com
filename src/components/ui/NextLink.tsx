import { memo, ReactNode } from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { Interpolation } from '@emotion/serialize'
import { Theme } from '@emotion/react'

import { ArrowRightIcon, ExternalLinkIcon } from './Icons'

interface NextLinkProps {
  href: string
  title?: string
  isActive?: boolean
  variant?: Variants
  css?: Interpolation<Theme>
  size?: keyof typeof Sizes
  withIcon?: boolean
  children: ReactNode
}

const Sizes = {
  md: tw`text-base`,
  lg: tw`text-lg`,
  xl: tw`text-xl`
}

type Variants = 'header' | 'primary'

const HeadLink = tw.a`
font-medium
tracking-wide
text-gray-400
transition
duration-200
hover:text-slate
focus:(ring-2 ring-offset-2 ring-gray-500 outline-none)
`

const TwLink = tw.a`
text-primary-500
hocus:(text-primary-400 underline text-underline-offset[3px] outline-none)
focus:(ring-2 ring-offset-2 ring-primary-300 no-underline )
transition
inline-flex
items-center`

const NextLink = (props: NextLinkProps) => {
  const { href, title, isActive, variant = 'primary', css: externalCss, size = 'md', withIcon, children } = props

  const isExternal = href.startsWith('https://')

  switch (variant) {
    case 'header':
      return (
        <Link href={href} passHref>
          <HeadLink title={`${title} page`} css={[isActive && tw`text-slate`, Sizes[size], externalCss]}>
            {children}
          </HeadLink>
        </Link>
      )

    case 'primary':
      if (isExternal) {
        return (
          <TwLink
            href={href}
            title={title || href.replace('https://', '')}
            target="_black"
            rel="noopener noreferrer"
            css={[tw`space-x-1 inline-flex items-center`, Sizes[size], externalCss]}
          >
            <span>{children}</span>
            <ExternalLinkIcon />
          </TwLink>
        )
      }

      return (
        <Link href={href} passHref>
          <TwLink css={[Sizes[size], tw`space-x-1 hocus:space-x-2`, externalCss]} title={title || href}>
            <span>{children}</span>
            {withIcon && <ArrowRightIcon />}
          </TwLink>
        </Link>
      )
    default:
      return <div></div>
  }
}

export default memo(NextLink)
