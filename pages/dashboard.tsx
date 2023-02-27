import isLoggedIn from "@/helpers/checkAuth";
import { useStore } from "@/store/GlobalStore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const {dispatch} = useStore();

  useEffect(() => {
    const isAuthenticated = isLoggedIn();
    if (!isAuthenticated) {
      router.push("/login-seller");
    }
  }, [router]);

  function logout(){
    dispatch({
      type: "AUTH",
      payload: {},
    });
    localStorage.removeItem('token')
    router.push("/");
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          DashBoard | WholesalerBase.com | Marketplace for Wholesaler
        </title>
      </Head>
      <div className="mt-20">This is Dashboard</div>
      <button onClick={logout}>Logout</button>
    </>
  );
}
