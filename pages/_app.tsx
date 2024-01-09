import Head from "next/head"
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from "react-toastify";

import '@/app/globals.css'
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }: {Component: any, pageProps: any}) {

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>Taxi Strasbourg Services</title>
      </Head>
          <Component {...pageProps} />
          <ToastContainer />
    </SessionProvider>
  )
}

export default MyApp
