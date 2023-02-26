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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WholesalerBase.com | Marketplace for Wholesaler</title>
      </Head>
      <main className={styles.main}>
        <h3 className="text-xl sm:text-2xl max-w-xl">
          Welcome to <strong>Wholesaler Base</strong>, the premier online
          marketplace for wholesale products.{" "}
        </h3>
        <QueryClientProvider client={queryClient}>
          <Search />
        </QueryClientProvider>

        <div className={styles.description}>
          <div></div>
        </div>
      </main>

    </>
  );
}
