import '~styles/tailwind.css'
import '~styles/global.css'
import Script from 'next/script'

import { DefaultSEO } from '~components/SEO'
import LayoutRoot from '~components/layout/layout-root'
import Page from '~components/layout/page'
import { AppPropsWithLayout } from '~types'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={process.env.NEXT_PUBLIC_UMAMI_URL}
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
      />
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
