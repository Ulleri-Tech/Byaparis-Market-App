import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="keywords"
          content="Marketplace, Sell Goods Online, Wholesaler's market, Bulk Sale of Goods"
        />
        <meta
          property="og:title"
          content="Byapari's Marketplace - Sale your products Now!"
        />
        <meta
          property="og:description"
          content="A platform or a Marketplace for B2B (Business to Business) to list your products for sale. Most useful for any wholesaler or manufacturer."
        />
        <meta
          name="description"
          content="A platform or a Marketplace for B2B (Business to Business) to list your products for sale. Most useful for any wholesaler or manufacturer."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
