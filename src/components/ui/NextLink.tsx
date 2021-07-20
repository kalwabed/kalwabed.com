import { memo, ReactNode } from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { HiArrowNarrowRight, HiOutlineExternalLink } from 'react-icons/hi'
import { Interpolation } from '@emotion/serialize'
import { Theme } from '@emotion/react'

interface NextLinkProps {
  href: string
  title?: string
  isActive?: boolean
  variant?: Variants
  css?: Interpolation<Theme>
  size?: keyof typeof Sizes
  withIcon?: boolean
  children: ReactNode
  className?: string
  onClick?: () => void
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
no-underline
text-highContrast
transition
duration-200
outline-none
hover:text-slate
dark:hover:text-lowContrast
focus:(ring-2 ring-offset-2 ring-gray-500 dark:(ring-brand-500 ring-offset-brand-800))
`

export const TwLink = tw.a`
text-brand-500
dark:text-link
border-bottom-width[3px] border-transparent
outline-none
no-underline
hover:text-highContrast
hocus:(transition border-link)
inline-flex
items-center`

const IconWrapper = tw.span`
text-brand-200
opacity-0
group-hocus:(text-brand-400 transition-opacity duration-300 opacity-60 dark:text-brand-300)
`

const NextLink = (props: NextLinkProps) => {
  const {
    href,
    title,
    isActive,
    variant = 'primary',
    css: externalCss,
    size = 'md',
    withIcon,
    children,
    onClick,
    className
  } = props

  const isExternal = href.startsWith('https://')

  switch (variant) {
    case 'header':
      return (
        <Link href={href} passHref>
          <HeadLink
            title={`${title} page`}
            className={className}
            onClick={onClick}
            css={[isActive && tw`text-slate dark:text-brand-600`, Sizes[size], externalCss]}
          >
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
            className={className ?? ''}
            css={[tw`space-x-1 inline-flex items-center`, Sizes[size], externalCss]}
          >
            <span>{children}</span>
            <HiOutlineExternalLink tw="w-3 h-3" />
          </TwLink>
        )
      }

      return (
        <Link href={href} passHref>
          <TwLink
            css={[Sizes[size], tw`space-x-1`, externalCss]}
            className={`group ${className ?? ''}`}
            title={title || href}
          >
            <span>{children}</span>
            {withIcon && (
              <IconWrapper>
                <HiArrowNarrowRight />
              </IconWrapper>
            )}
          </TwLink>
        </Link>
      )
    default:
      return <div></div>
  }
}

export default memo(NextLink)
