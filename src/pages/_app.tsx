import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'
import Page from '@/components/layout/Page'
import { DefaultSEO } from '@/components/SEO'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <GlobalStyles />
        <DefaultSEO />
        <Page>
          <Component {...pageProps} />
        </Page>
      </CacheProvider>
    </>
  )
}
