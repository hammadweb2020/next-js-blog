
import '../styles/globals.css'
import Script from 'next/script'

import Header from 'components/Header'
import Footer from 'components/Footer'

function MyApp({ Component, pageProps }) {
  return (
<>
<Header />
<Component {...pageProps} />

<Footer />
<Script type="text/javascript"  src='https://d33wubrfki0l68.cloudfront.net/js/e3aeb05a1e1f79dd89e3aac244cfb77b1d8bcff4/assets/js/build.min.js' />
</>
  )
}

export default MyApp
