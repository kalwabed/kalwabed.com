import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'

import Logo from '~components/shared/logo'

export const routes = [
  {
    href: '/blog',
    label: 'Blog'
  },
  {
    href: '/projects',
    label: 'Projects'
  },
  {
    href: '/about',
    label: 'About'
  }
]

const TopNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="z-50 backdrop-blur-md backdrop-filter bg-appBg bg-opacity-60 sticky inset-0 border-b border-appBorder">
      <div className="flex items-center justify-between py-4 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg">
        <Link href="/">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center space-x-3">
          {routes.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <a
                  className={`umami--click-NAV-${label} font-medium text-lowContrast transition py-2 px-3 rounded hover:text-highContrast focus:text-highContrast focus:outline-none focus:ring focus:ring-appBorder`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            className="p-2 -mr-1 transition rounded focus:ring focus:ring-appBorder focus:outline-none"
            title="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiOutlineMenu className="w-5 h-5 text-highContrast" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopNavigation
