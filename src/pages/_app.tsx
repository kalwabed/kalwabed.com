import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'
import PageRoot from '@/components/layout/PageRoot'
import { DefaultSEO } from '@/components/SEO'
import AppContext from '@/AppContext'
import LayoutRoot from '@/components/v2/layout/LayoutRoot'

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
        <ThemeProvider attribute="class">
          <AppContext.Provider>
            <LayoutRoot>
              <Component {...pageProps} />
            </LayoutRoot>
          </AppContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
