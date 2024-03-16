import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return <>
  <Head>
    <title> Movie App </title>
  </Head>
  
  {/* render header for all pages */}
  <Header/>
  
  
  <Component {...pageProps} />
  
  </>;
}
