import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

import clsxm from '~lib/clsxm'

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost'
  isExternal?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  size?: keyof typeof sizes
}

const variants = {
  primary: 'text-link',
  ghost: 'text-highContrast before:hidden hover:text-link focus:text-link'
}

const sizes = {
  md: 'text-base',
  lg: 'text-4xl'
}

const baseClass =
  'relative font-bold no-underline transition inline-flex items-center focus:before:h-1 outline-none before:absolute before:bottom-0 before:top-[21px] before:left-0 before:opacity-0 before:transition before:duration-300 before:w-full before:h-0.5 before:bg-link hover:before:opacity-100 focus:before:opacity-100 '

const TextLink = ({
  variant = 'primary',
  size = 'md',
  isExternal = false,
  className,
  children,
  ...props
}: TextLinkProps) => {
  if (isExternal) {
    return (
      <Link
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsxm(baseClass, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link href={props.href} {...props} className={clsxm(baseClass, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  )
}

export default TextLink
