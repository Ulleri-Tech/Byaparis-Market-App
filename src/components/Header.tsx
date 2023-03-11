import { useStore } from "@/store/GlobalStore";
import Link from "next/link";
import { useRouter } from "next/router";
import ImageTag from "./ImageTag";

export default function Header() {
  const { state } = useStore();
  const { cart, auth } = state;
  const router = useRouter();

  return (
    <nav className="bg-white border-b border-blue-100 fixed-header">
      <div className="flex max-w-[1000px] justify-between pr-2 w-full px-4  m-auto pt-2 sm:px-4">
        <Link href="/" className="flex items-center">
          <ImageTag
            src="./wholesaler-base.png"
            alt="saler's Base Logo"
            width={200}
            height={200}
            priority
          />
        </Link>

        <ul className="flex justify-end items-center gap-2 md:gap-10">
          <li>
            <Link
              href="/checkout"
              className={`flex items-center gap-1 py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
                router.pathname === "/checkout"
                  ? "text-blue-700"
                  : "text-gray-700"
              }`}
              aria-current="page"
            >
              <i className="ri-shopping-cart-line"></i>
              <span>Cart</span>{" "}
              {cart.cartItems.length > 0 && (
                <span className="inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                  {cart.cartItems.reduce(
                    (acc: any, sum: any) => acc + sum.quantity,
                    0
                  )}
                </span>
              )}
            </Link>
          </li>

          <li>
            {Object.keys(auth).length > 0 ? (
              <Link
                href="/dashboard"
                className={`flex py-2 pl-3 pr-4 ${router.pathname === "/dashboard"
                ? "text-blue-700"
                : "text-gray-700"} items-center gap-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 `}
              >
                Hello, {auth.email}
              </Link>
            ) : (
              <Link
                href="/login-seller"
                className={`flex py-2 pl-3 pr-4 items-center gap-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
                  router.pathname === "/login-seller"
                    ? "text-blue-700"
                    : "text-gray-700"
                }  `}
              >
                <i className="ri-login-box-line"></i>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
