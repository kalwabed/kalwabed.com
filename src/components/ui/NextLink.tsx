import tw from 'twin.macro'
import Link from 'next/link'
import { Interpolation } from '@emotion/serialize'
import { Theme } from '@emotion/react'

interface NextLinkProps {
  href: string
  label: string
  isActive?: boolean
  variant?: Variants
  css?: Interpolation<Theme>
}

type Variants = 'header' | 'primary'

const TwLink = tw.a`text-primary-500 hocus:(text-primary-400 underline) transition no-underline`

const isExternalIcon = (
  <svg tw="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
)

const NextLink = (props: NextLinkProps) => {
  const { href, label, isActive, variant = 'primary', css } = props

  const isExternal = href.startsWith('https://')

  switch (variant) {
    case 'header':
      return (
        <Link href={href} passHref>
          <a
            title={`${label} page`}
            css={[
              tw`font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-slate`,
              isActive && tw`text-slate`,
              css
            ]}
          >
            {label}
          </a>
        </Link>
      )

    case 'primary':
      if (isExternal) {
        return (
          <TwLink
            title={href.replace('https://', '')}
            target="_black"
            rel="noopener noreferrer"
            css={{ display: 'inline-flex', alignItems: 'center' }}
          >
            {label} {isExternalIcon}
          </TwLink>
        )
      }
      return (
        <Link href={href} passHref>
          <TwLink css={css} title={label}>
            {label}
          </TwLink>
        </Link>
      )
    default:
      return <div></div>
  }
}

export default NextLink
