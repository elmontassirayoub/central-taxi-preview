import Head from "next/head"
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from "react-toastify";
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" />
        <title>Taxi Strasbourg Services</title>
      </Head>
      <main className={inter.className}>
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
