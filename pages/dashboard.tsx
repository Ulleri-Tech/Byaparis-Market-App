import isLoggedIn from "@/helpers/checkAuth";
import { useRouter } from "next/router";
import { useEffect,  } from "react";

export default function Dashboard() {

  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = isLoggedIn();
    if (!isAuthenticated) {
      router.push("/login-seller");
    }

  }, []);

  return <div>This is Dashboard</div> 
}
