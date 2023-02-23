import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <Head>
        <link rel="icon" type="image/icon" href="/marketplace.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>WholesalerBase.com | Marketplace for Wholesaler</title>
    
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to Wholesaler Base</h1>
        <QueryClientProvider client={queryClient}>
          <Search />
        </QueryClientProvider>

        <div className={styles.description}>
          <div>
          
          </div>
    
        </div>

        
      </main>
      <Footer />
    </>
  );
}
