import '~styles/tailwind.css'
import '~styles/global.css'
import '~styles/mdx.css'

import Script from 'next/script'

import LayoutRoot from '~components/layout/layout-root'
import Page from '~components/layout/page'
import { DefaultSEO } from '~components/SEO'
import { AppPropsWithLayout } from '~types'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <Script strategy="afterInteractive" src={umamiUrl} data-website-id={umamiId} />
      <DefaultSEO />
      {getLayout(
        <LayoutRoot>
          <Page>
            <Component {...pageProps} />
          </Page>
        </LayoutRoot>
      )}
    </>
  )
}
