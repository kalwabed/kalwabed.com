import tw from 'twin.macro'

import { LayoutWrapper } from '@/utils/styles'
import { useRouter } from 'next/router'
import SEO, { ogImgExtract } from '../SEO'
import app from '@/config/app'
import { ReactNode } from 'react'

interface PageWrapperProps {
  pageTitle: string
  isFluid?: boolean
  children: ReactNode
}

const PageWrapper = (props: PageWrapperProps) => {
  const { children, pageTitle, isFluid = false } = props
  const { asPath } = useRouter()

  const _SEO = (
    <SEO
      title={pageTitle}
      canonical={app.siteUrl + asPath}
      openGraph={{
        title: pageTitle + ' @kalwabed',
        url: app.siteUrl + asPath,
        images: [{ url: ogImgExtract(pageTitle), alt: pageTitle }]
      }}
    />
  )

  if (isFluid) {
    return (
      <div tw="py-4 max-w-full flex flex-col">
        {_SEO}
        {children}
      </div>
    )
  }

  return (
    <div css={[LayoutWrapper, tw`flex flex-col w-full justify-center`]}>
      {_SEO}
      {children}
    </div>
  )
}

export default PageWrapper
