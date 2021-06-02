import { ThemeProvider } from 'next-themes'
import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'
import PageRoot from '@/components/layout/PageRoot'
import { DefaultSEO } from '@/components/SEO'
import AppContext from '@/AppContext'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <GlobalStyles />
        <DefaultSEO />
        <ThemeProvider attribute="class">
          <AppContext.Provider>
            <PageRoot>
              <Component {...pageProps} />
            </PageRoot>
          </AppContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
