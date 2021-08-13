import tw from 'twin.macro'
import Link, { LinkProps } from 'next/link'
import { Interpolation, Theme } from '@emotion/react'

const BaseButton = tw.a`
font-bold
tracking-wide
border
transition
focus:ring
inline-flex
py-1
px-4
rounded
items-center
no-underline
outline-none
`

const variants = {
  outline: tw`text-lowContrast border-v2-borderIdle hover:(bg-v2-hover border-v2-borderHover) focus:(ring-v2-borderIdle bg-v2-active)`
}

interface Props {
  link?: LinkProps
  href: string
  title?: string
  variant?: 'outline'
  styles?: Interpolation<Theme>
  className?: string
}

const ButtonLink: React.FC<Props> = props => {
  const { variant = 'outline', styles, className, title, href } = props

  return (
    <Link {...props.link} href={href} passHref>
      <BaseButton title={title} className={className} css={[variants[variant], styles]}>
        {props.children}
      </BaseButton>
    </Link>
  )
}

export default ButtonLink
