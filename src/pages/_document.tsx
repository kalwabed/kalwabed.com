import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
          <Script
            strategy="afterInteractive"
            src={process?.env.NEXT_PUBLIC_UMAMI_URL}
            data-website-id={process?.env.NEXT_PUBLIC_UMAMI_ID}
          />
        </Head>
        <body className="bg-appBg font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
