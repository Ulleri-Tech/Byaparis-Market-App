import Footer from "@/components/Footer";
import Header from "@/components/Header";
import isLoggedIn from "@/helpers/checkAuth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = isLoggedIn();
    if (!isAuthenticated) {
      router.push("/login-seller");
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          DashBoard | WholesalerBase.com | Marketplace for Wholesaler
        </title>
      </Head>
      <div>This is Dashboard</div>
    </>
  );
}
