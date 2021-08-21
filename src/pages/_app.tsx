import Script from 'next/script'
import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@components/global-styles'
import { DefaultSEO } from '@/components/SEO'
import LayoutRoot from '@components/layout/layout-root'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={process.env.NEXT_PUBLIC_UMAMI_URL}
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
      />
      <DefaultSEO />
      <CacheProvider value={emotionCache}>
        <GlobalStyles />
        <LayoutRoot>
          <Component {...pageProps} />
        </LayoutRoot>
      </CacheProvider>
    </>
  )
}
