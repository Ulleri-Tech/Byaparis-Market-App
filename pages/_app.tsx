import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DataProvider } from "@/store/GlobalStore";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </DataProvider>
    </>
  );
}
