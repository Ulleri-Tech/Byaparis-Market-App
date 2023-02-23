import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageTag from "@/components/ImageTag";
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to Wholesaler Base</h1>
        <QueryClientProvider client={queryClient}>
          <Search />
        </QueryClientProvider>

        <div className={styles.description}>
          <div>
            <ImageTag
              src="/marketplace.ico"
              alt="Marketplace Logo"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>

        {/* <div className={styles.grid}>
        <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 >
              Learn <span>-&gt;</span>
            </h2>
            <p >
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>
          
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 >
              Learn <span>-&gt;</span>
            </h2>
            <p >
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
      <Footer />
    </>
  );
}
