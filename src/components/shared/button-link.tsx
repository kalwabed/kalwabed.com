import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

import clsxm from '~lib/clsxm'

const baseClass =
  'font-bold tracking-wide border transition focus:ring inline-flex py-1 px-4 rounded items-center no-underline outline-none'

const variants = {
  outline:
    'text-lowContrast border-bdr-idle hover:bg-btn-hover hover:border-bdr-hover focus:ring-bdr-idle focus:bg-btn-active'
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof variants
  isExternal?: boolean
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href = '/',
  isExternal,
  variant = 'outline',
  className,
  children,
  ...props
}) => {
  if (isExternal) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsxm(baseClass, variants[variant], className)}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link href={href} className={clsxm(baseClass, variants[variant], className)} {...props}>
      {children}
    </Link>
  )
}

export default ButtonLink
