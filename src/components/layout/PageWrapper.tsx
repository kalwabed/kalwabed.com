import tw from 'twin.macro'
import { ReactNode } from 'react'

import { Container } from '@/utils/styles'
import SEO from '../SEO'

interface PageWrapperProps {
  pageTitle?: string
  children: ReactNode
  withSEO?: boolean
}

const PageWrapper = (props: PageWrapperProps) => {
  const { children, pageTitle, withSEO = true } = props

  return (
    <div css={[Container, tw`flex flex-col w-full justify-center`]}>
      {withSEO && <SEO title={pageTitle} />}
      {children}
    </div>
  )
}

export default PageWrapper
