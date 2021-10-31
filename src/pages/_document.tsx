import 'twin.macro'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'

import emotionCache from '~utils/emotionCache'

const { extractCritical } = createEmotionServer(emotionCache)

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
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
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        </Head>
        <body tw="bg-appBg font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
