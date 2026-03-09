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
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXEWRHUlGgKQtuKiep7JyxhfV3a65Rxss&libraries=places"></script>
      </Head>
      <main className={`${inter.className} w-full`}>
        <Component {...pageProps} />
      </main>
      <ToastContainer />
      <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/f631425ca93aa1e9f8d06035/script.js"></Script>
    </SessionProvider>
  )
}

export default MyApp
