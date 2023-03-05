import Search from "@/components/Search";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import FeaturedProduct from "@/components/FeaturedProducts";

export default function Home() {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {queries: {staleTime: 1000*60*5}}
  }));

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WholesalerBase.com | Marketplace for Wholesaler</title>
      </Head>
      <main className={styles.main}>
        <h3 className="text-xl sm:text-2xl max-w-xl mb-5">
          Welcome to <strong>Wholesaler Base</strong>, the premier online
          marketplace for wholesale products.{" "}
        </h3>

        <QueryClientProvider client={queryClient}>
          <Search />
          <FeaturedProduct />
        </QueryClientProvider>
        
        <div className={styles.description}>
          <div></div>
        </div>
      </main>
    </>
  );
}
