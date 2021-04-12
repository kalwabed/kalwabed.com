import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'
import PageRoot from '@/components/layout/PageRoot'
import { DefaultSEO } from '@/components/SEO'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <GlobalStyles />
        <DefaultSEO />
        <PageRoot>
          <Component {...pageProps} />
        </PageRoot>
      </CacheProvider>
    </>
  )
}
