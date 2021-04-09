import { CacheProvider } from '@emotion/react'
import Head from 'next/head'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'
import Page from '@/components/layout/Page'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <GlobalStyles />
        <Page>
          <Head>
            <title>Kalwabed</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Page>
      </CacheProvider>
    </>
  )
}
