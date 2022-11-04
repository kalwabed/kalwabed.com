import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

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
        <Head />
        <body className="bg-appBg font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
