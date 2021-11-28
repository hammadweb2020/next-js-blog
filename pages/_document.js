import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
     <Head>
     <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
          <meta name="theme-color" content="#fff" />
      </Head>
        <body>
          <Main />
          <NextScript />
        
        </body>
      </Html>
    )
  }
}

export default MyDocument