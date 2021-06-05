import React from 'react';
import { ChakraProvider, Switch } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Joe Schofield</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/d9a14fbd57.js" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
