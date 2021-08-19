import Script from 'next/script'
import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@components/global-styles'
import { DefaultSEO } from '@/components/SEO'
import AppContext from '@/AppContext'
import LayoutRoot from '@components/v2/layout/layout-root'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Script
          strategy="afterInteractive"
          src={process.env.NEXT_PUBLIC_UMAMI_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        />
        <GlobalStyles />
        <DefaultSEO />
        <AppContext.Provider>
          <LayoutRoot>
            <Component {...pageProps} />
          </LayoutRoot>
        </AppContext.Provider>
      </CacheProvider>
    </>
  )
}
