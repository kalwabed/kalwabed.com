import 'twin.macro'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'

import emotionCache from '@/utils/emotionCache'

const { extractCritical } = createEmotionServer(emotionCache)

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const { css, ids } = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style key="emotion-css" data-emotion={ids.join(' ')} dangerouslySetInnerHTML={{ __html: css }} />
      ]
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
        </Head>
        <body tw="bg-white dark:bg-appBg">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
