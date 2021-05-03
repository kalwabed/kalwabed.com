import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'
import PageRoot from '@/components/layout/PageRoot'
import { DefaultSEO } from '@/components/SEO'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700" rel="stylesheet" />
        </Head>
        <GlobalStyles />
        <DefaultSEO />
        <PageRoot>
          <Component {...pageProps} />
        </PageRoot>
      </CacheProvider>
    </>
  )
}
