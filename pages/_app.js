import React from "react";
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return ( 
  <React.Fragment>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </React.Fragment>
  )
}

export default MyApp