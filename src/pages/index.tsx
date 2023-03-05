import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import SearchBar from "@/components/SearchBar";
import { GetStaticProps } from "next";
import { getFeaturedProducts } from "@/utils/actions";
import { ProductResponse } from "@/helpers/types";
import FeaturedProduct from "@/components/FeaturedProduct";
import { useRouter } from "next/router";

interface HomeProps {
  products: ProductResponse[];
}
export default function Home({ products }: HomeProps) {
  const router = useRouter();

  const handleSearch = (query: string) => {
    router.push(`/search?q=${query}`);
  };

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
          <SearchBar onSearch={handleSearch} />
        {products && <FeaturedProduct products={products}/>}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getFeaturedProducts(1);

  return {
    props: {
      products,
    }
  };
};
