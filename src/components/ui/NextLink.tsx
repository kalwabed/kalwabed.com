import tw, { styled } from 'twin.macro'
import Link from 'next/link'
import { Interpolation } from '@emotion/serialize'
import { Theme } from '@emotion/react'

interface NextLinkProps {
  href: string
  label: string
  isActive?: boolean
  variant?: Variants
  isExternal?: boolean
  tw?: string
}

type Variants = 'header' | 'primary'
const TwLink = tw.a`text-primary-500 hocus:(text-primary-400 underline font-medium) transition no-underline`

const NextLink = (props: NextLinkProps) => {
  const { href, label, isActive, variant = 'primary', isExternal = false } = props

  switch (variant) {
    case 'header':
      return (
        <Link href={href} passHref>
          <a
            title={`${label} page`}
            css={[
              tw`font-medium tracking-wide text-gray-500 transition duration-200 hover:(text-gray-800)`,
              isActive && tw`text-gray-800`
            ]}
          >
            {label}
          </a>
        </Link>
      )
    case 'primary':
      if (isExternal) {
        return (
          <a
            href={href}
            title={label}
            target="_black"
            rel="noopener noreferrer"
            css={[tw`text-primary-500 hocus:(text-primary-400 underline) transition no-underline`]}
          >
            {label}
          </a>
        )
      }
      return (
        <Link href={href} passHref>
          <TwLink title={label}>{label}</TwLink>
        </Link>
      )
    default:
      return <div></div>
  }
}

export default NextLink
