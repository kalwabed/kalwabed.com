import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <GlobalStyles />
        <Component {...pageProps} />
      </CacheProvider>
    </>
  )
}
