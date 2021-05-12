import tw from 'twin.macro'
import { memo, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Logo from './Logo'
import Routes from '@/config/Routes'
import NextLink from '../ui/NextLink'
import { Container } from '@/utils/styles'
import { HamburgerIcon, XCloseIcon } from '../ui/Icons'
import useHeaderVisible from '@/hooks/useHeaderVisible'
import Button from '../ui/Button'
import { useTheme } from 'next-themes'

const navTotal = 4

const Header = () => {
  const { asPath } = useRouter()
  const { setTheme, theme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isVisible = useHeaderVisible()

  const switchTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme])

  return (
    <motion.header
      tw="fixed z-20 w-full backdrop-filter[saturate(180%) blur(10px)]"
      initial="initial"
      variants={{
        initial: {
          top: 0
        },
        hidden: {
          top: -120
        }
      }}
      animate={isVisible ? 'initial' : 'hidden'}
      transition={{ duration: 0.3 }}
    >
      <div css={[Container, tw`flex items-center justify-between w-auto`]}>
        <Link href="/" passHref>
          <a
            tw="inline-flex items-center"
            title="kalwabed.xyz Logo"
            aria-label="Logo"
            className="umami--click--headerLogo"
          >
            <Logo />
          </a>
        </Link>
        <ul tw="hidden md:flex items-center space-x-8">
          {Routes.map(
            (route, index) =>
              index < navTotal && (
                <li key={route.href}>
                  <NextLink
                    variant="header"
                    className={`umami--click--NAV-${route.label}`}
                    title={route.label}
                    isActive={route.href === asPath}
                    href={route.href}
                  >
                    {route.label}
                  </NextLink>
                </li>
              )
          )}
          <Button
            tw="p-3.5 py-4 bg-transparent text-gray-400 focus:(ring-0 ring-offset-0) hocus:bg-transparent dark:hover:text-gray-300 hover:text-slate"
            title="Theme toggle"
            onClick={switchTheme}
          >
            {theme && theme === 'light' ? (
              <svg tw="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg tw="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </Button>
        </ul>

        <div tw="md:hidden">
          <button
            tw="p-2 -mr-1 transition duration-200 rounded focus:(outline-none ring)"
            aria-label="Open menu"
            title="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>
          {isMenuOpen && <NavModal setIsMenuOpen={setIsMenuOpen} asPath={asPath} />}
        </div>
      </div>
    </motion.header>
  )
}

const NavModal = memo(({ setIsMenuOpen, asPath }: { setIsMenuOpen: (arg0: boolean) => void; asPath: string }) => (
  <div tw="absolute top-0 left-0 w-full">
    <div tw="p-5 bg-white border rounded shadow-sm">
      <div tw="flex items-center justify-between mb-4">
        <Link href="/" passHref>
          <a tw="inline-flex items-center" className="umami--click--headerLogo">
            <Logo />
          </a>
        </Link>
        <button
          tw="p-2 -mt-2 -mr-2 transition rounded hocus:(bg-gray-200) focus:(outline-none ring)"
          aria-label="Close menu"
          title="Close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          <XCloseIcon />
        </button>
      </div>
      <nav>
        <ul tw="space-y-4">
          {Routes.map(
            (route, index) =>
              index < navTotal && (
                <li key={route.href}>
                  <NextLink
                    variant="header"
                    title={route.label}
                    isActive={route.href === asPath}
                    href={route.href}
                    className={`umami--click--NAV-${route.label}`}
                  >
                    {route.label}
                  </NextLink>
                </li>
              )
          )}
        </ul>
      </nav>
    </div>
  </div>
))

export default memo(Header)
