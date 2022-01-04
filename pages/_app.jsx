import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'

import { Layout } from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/headicon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    );
}

export default MyApp
