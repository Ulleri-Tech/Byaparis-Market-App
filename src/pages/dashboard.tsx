import Button from "@/components/common/Button";
import ListProduct from "@/components/product/ListProduct";
import isLoggedIn from "@/helpers/checkAuth";
import { useStore } from "@/store/GlobalStore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { dispatch } = useStore();

  useEffect(() => {
    const isAuthenticated = isLoggedIn();
    if (!isAuthenticated) {
      localStorage.removeItem("userCredentials");
      router.push("/login-seller");
      dispatch({
        type: "AUTH",
        payload: {},
      });
    }
  }, [router, dispatch]);

  function logout() {
    dispatch({
      type: "AUTH",
      payload: {},
    });
    localStorage.removeItem("userCredentials");
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
      <div className="flex mx-auto justify-around max-w-lg mt-24">
      <div className="font-bold"> Dashboard</div>
      <Button
        leftIcon={<i className="ri-logout-box-line"></i>}
        theme="danger"
        size="small"
        onClick={logout}
      >
        Logout
      </Button>
        
      </div>
     
      <ListProduct />
    </>
  );
}
