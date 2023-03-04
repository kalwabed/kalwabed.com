'use client'

import '~styles/tailwind.css'
import '~styles/global.css'
import '~styles/mdx.css'

import { Inter, Manrope } from 'next/font/google'
import React from 'react'

import Page from '~components/layout/page'
import PageFooter from '~components/layout/page-footer'
import TopNavigation from '~components/layout/top-navigation'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})
const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin']
})

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`bg-appBg ${inter.className}`}>
        <TopNavigation />
        <Page>{children}</Page>
        <PageFooter />
      </body>

      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
    </html>
  )
}

export default RootLayout
