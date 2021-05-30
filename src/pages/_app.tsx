import { ThemeProvider } from 'next-themes'
import { CacheProvider } from '@emotion/react'
import { useEffect } from 'react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'
import PageRoot from '@/components/layout/PageRoot'
import { DefaultSEO } from '@/components/SEO'
import AppContext from '@/AppContext'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // set default theme to light if theme are not initialize yet
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'light')
    if (localStorage.getItem('theme') === 'null') localStorage.setItem('theme', 'light')
  }, [])

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
