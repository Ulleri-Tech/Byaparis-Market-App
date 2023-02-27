import Search from "@/components/Search";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ALL_PRODUCTS } from "@/utils/constant";
import ProductItem from "@/components/product/productItem";

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


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-6">
          {ALL_PRODUCTS.slice(0, 6).map((product, _id) => (
            <ProductItem key={_id} product={product} handleCheck={_id} />
          ))}
        </div>
        
        <div className={styles.description}>
          <div></div>
        </div>
      </main>
    </>
  );
}
