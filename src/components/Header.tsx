import { useStore } from "@/store/GlobalStore";
import Link from "next/link";
import ImageTag from "./ImageTag";

export default function Header() {
  const { state } = useStore();

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
              className="flex items-center gap-1 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              aria-current="page"
            >
              <i className="ri-shopping-cart-line"></i>
              <span>Cart</span>{" "}
              <span className="inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {state.cart.length}
              </span>
            </Link>
          </li>

          <li>
            {Object.keys(state.auth).length > 0 ? (
              <Link
                href="/dashboard"
                className="flex py-2 pl-3 pr-4 text-gray-700  items-center gap-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Hello, {state.auth.user}
              </Link>
            ) : (
              <Link
                href="/login-seller"
                className="flex py-2 pl-3 pr-4 text-gray-700  items-center gap-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
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
