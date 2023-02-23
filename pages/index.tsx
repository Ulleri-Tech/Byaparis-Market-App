import ImageTag from "@/components/Image";
import Head from "next/head";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/icon" href="/marketplace.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Byapari&apos;s Marketplace</title>
      </Head>

      <main className={styles.main}>
        <h1>Welcome to Byapari&apos;s MarketPlace</h1>
        <div className={styles.description}>
         
          <div>
            <div className="text-3xl bg-blue-300 p-3">Search Here</div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <ImageTag
                src="/marketplace.ico"
                alt="Marketplace Logo"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p >
              Find in-depth information about Next.js features and&nbsp;API.
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
        </div>
      </main>
    </>
  );
}
