import clsx from 'clsx'
import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

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
  href,
  isExternal,
  variant = 'outline',
  className,
  children,
  ...props
}) => {
  if (isExternal) {
    return (
      <Link href={href}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(baseClass, variants[variant], className)}
          {...props}
        >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <Link href={href}>
      <a className={clsx(baseClass, variants[variant])} {...props}>
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink
