import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'
import Page from '@/components/layout/Page'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <GlobalStyles />
        <Page>
          <Component {...pageProps} />
        </Page>
      </CacheProvider>
    </>
  )
}
