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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="description" content="Taxi Strasbourg Service" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" />
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="89cdc959-8976-49aa-83b5-e44ba77088f1" data-blockingmode="auto" type="text/javascript"></script>
        <title>Taxi Strasbourg Service</title>
      </Head>
      <main className={inter.className}>
      <script id="CookieDeclaration" src="https://consent.cookiebot.com/89cdc959-8976-49aa-83b5-e44ba77088f1/cd.js" type="text/javascript" async></script>
        <Component {...pageProps} />
      </main>
      <ToastContainer />
      <script
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}></script>
    </SessionProvider>
  )
}

export default MyApp
