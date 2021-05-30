import tw from 'twin.macro'
import { ReactNode } from 'react'

import { Container } from '@/utils/styles'
import SEO from '../SEO'

interface PageWrapperProps {
  pageTitle?: string
  pageDescription?: string
  children: ReactNode
  withSEO?: boolean
}

const PageWrapper = (props: PageWrapperProps) => {
  const { children, pageTitle, withSEO = true, pageDescription } = props

  return (
    <div css={[Container, tw`flex flex-col w-full justify-center`]}>
      {withSEO && <SEO title={pageTitle} description={pageDescription} />}
      {children}
    </div>
  )
}

export default PageWrapper
