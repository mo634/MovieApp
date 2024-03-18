import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ThemeProviderComp from "@/components/ThemeProviderComp";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title> Movie App </title>
    </Head>

    {/* wrap all components by ThemeProvider */}
    <ThemeProviderComp>
      {/* render header for all pages */}
      <Header />

      <NavBar/>

      <Component {...pageProps} />
    </ThemeProviderComp>

  </>;
}
