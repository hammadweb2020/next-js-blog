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
 
     <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
<link rel="apple-touch-icon" sizes="256x256" href="/icon-256x256.png" />
<link rel="apple-touch-icon" sizes="384x384" href="/icon-384x384.png" />
<link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
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