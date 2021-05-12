import { CacheProvider } from '@emotion/react'

import emotionCache from '@/utils/emotionCache'
import GlobalStyles from '@/components/GlobalStyles'
import PageRoot from '@/components/layout/PageRoot'
import { DefaultSEO } from '@/components/SEO'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
            src={process.env.NEXT_PUBLIC_UMAMI_URL}
          />
        </Head>
        <GlobalStyles />
        <DefaultSEO />
        <ThemeProvider attribute="class" defaultTheme="system">
          <PageRoot>
            <Component {...pageProps} />
          </PageRoot>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
