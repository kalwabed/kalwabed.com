import type { ReactNode } from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { Interpolation } from '@emotion/serialize'
import { Theme } from '@emotion/react'

import { ArrowRight, ExternalLink } from './Icons'

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

const TwLink = tw.a`text-primary-500 hocus:(text-primary-400 underline) transition no-underline inline-flex items-center`

const NextLink = (props: NextLinkProps) => {
  const { href, title, isActive, variant = 'primary', css: externalCss, size = 'md', withIcon, children } = props

  const isExternal = href.startsWith('https://')

  switch (variant) {
    case 'header':
      return (
        <Link href={href} passHref>
          <a
            title={`${title} page`}
            css={[
              tw`font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-slate`,
              isActive && tw`text-slate`,
              Sizes[size],
              externalCss
            ]}
          >
            {children}
          </a>
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
            <ExternalLink />
          </TwLink>
        )
      }
      return (
        <Link href={href} passHref>
          <TwLink css={[Sizes[size], tw`space-x-1 hover:space-x-2`, externalCss]} title={title || href}>
            <span>{children}</span>
            {withIcon && <ArrowRight />}
          </TwLink>
        </Link>
      )
    default:
      return <div></div>
  }
}

export default NextLink
