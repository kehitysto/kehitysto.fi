import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import Head from 'next/head';

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={publicRuntimeConfig.basePath + "/img/kehitysto-small-logo.png"} type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

