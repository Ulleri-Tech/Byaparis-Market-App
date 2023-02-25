import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Login from "@/components/Login";

export default function LoginSeller() {
  return (
    <div>
      <Header />
      <div className="p-10 mt-10">
        <Login />
      </div>
      <Footer />
    </div>
  );
}
