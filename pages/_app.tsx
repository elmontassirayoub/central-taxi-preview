import Head from "next/head"
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from "react-toastify";
import { NextScript } from "next/document";
import Script from "next/script";

import '@/app/globals.css'
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>Taxi Strasbourg Services</title>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
      {/* <NextScript /> */}
      {/* <Script
        strategy="beforeInteractive"
        id="googlemaps"
        type="next/javascript"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY ?? ""}&libraries=places`}
      /> */}
      <script
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}></script>
    </SessionProvider>
  )
}

export default MyApp
