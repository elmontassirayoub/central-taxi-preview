import Head from "next/head"
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from "react-toastify";
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Taxi Strasbourg</title>
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <ToastContainer />
      <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/f631425ca93aa1e9f8d06035/script.js"></Script>
      <script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}></script>
    </SessionProvider>
  )
}

export default MyApp
