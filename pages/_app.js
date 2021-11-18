
import '../styles/globals.css'
import Script from 'next/script'

import Header from 'components/Header'
import Footer from 'components/Footer'
import axios from 'axios'
import getconfig from 'next/config'

function MyApp({ Component, pageProps, navigations }) {

  return (
<>
<Header navigations={navigations} />
<Component {...pageProps} />
<Footer />
<Script type="text/javascript"  src='https://d33wubrfki0l68.cloudfront.net/js/e3aeb05a1e1f79dd89e3aac244cfb77b1d8bcff4/assets/js/build.min.js' />
</>
  )
}

const { publicRuntimeConfig } = getconfig()

MyApp.getInitialProps =  async() => {

                  const res = await axios.get(`${publicRuntimeConfig.API_URL}/categories`);
                  const navigations = res.data;
                  return {  navigations };

}


export default MyApp
