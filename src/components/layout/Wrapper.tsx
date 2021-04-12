import tw from 'twin.macro'

import { LayoutWrapper } from '@/utils/styles'
import { useRouter } from 'next/router'
import SEO, { ogImgExtract } from '../SEO'
import app from '@/config/app'

const Wrapper = ({ children, pageTitle }) => {
  const { asPath } = useRouter()

  return (
    <div css={[LayoutWrapper, tw`flex flex-col w-full justify-center`]}>
      <SEO
        title={pageTitle}
        canonical={app.siteUrl + asPath}
        openGraph={{
          title: pageTitle + ' @kalwabed',
          url: app.siteUrl + asPath,
          images: [{ url: ogImgExtract(pageTitle), alt: pageTitle }]
        }}
      />
      {children}
    </div>
  )
}

export default Wrapper
