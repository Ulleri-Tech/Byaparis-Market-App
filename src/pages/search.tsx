import ProductItem from "@/components/product/productItem";
import SearchBar from "@/components/SearchBar";
import { ProductResponse } from "@/helpers/types";
import { searchProducts } from "@/utils/actions";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

interface SearchProps {
    foundProducts: ProductResponse[];
  }

export default function Search({ foundProducts }: SearchProps) {
  const router = useRouter();

  const handleSearch = async(query: string) => {
    router.push(`/search?q=${query}`);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Seach product name | WholesalerBase.com | Marketplace for Wholesaler
        </title>
      </Head>
      <main className={styles.main}>

          <SearchBar onSearch={handleSearch} />
      
          <div className="mt-4">
          <h2 className="pl-4 text-left text-xl font-semibold">
            Search results:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
            {foundProducts.length === 0 ? (
              <h2>No Products</h2>
            ) : (
                foundProducts.map((product, _id) => (
                <ProductItem key={_id} product={product} handleCheck={_id} />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { q } = context.query;
  console.log(q)
  const foundProducts = await searchProducts(q||'');

  return {
    props: {
      foundProducts
    },
  };
}
