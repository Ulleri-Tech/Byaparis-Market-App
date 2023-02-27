import Login from "@/components/Login";
import Head from "next/head";

export default function LoginSeller() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login | WholesalerBase.com | Marketplace for Wholesaler</title>
      </Head>
      <main className="mt-16 sm:p-10">
        <Login />
      </main>
    </>
  );
}
