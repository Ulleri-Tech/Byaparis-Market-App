import Link from "next/link";
import ImageTag from "./ImageTag";

export default function Header() {
  return (
    <nav className="bg-white flex gap-10 justify-between w-full max-w-[1000px] m-auto rounded mt-4 sm:px-4 ">
      <Link href="/" className="flex items-center">
        <ImageTag
          src="./wholesaler-base.png"
          alt="saler's Base Logo"
          width={200}
          height={200}
          priority
        />
      </Link>

      <ul className="flex justify-end items-center gap-4 md:gap-10">

        <li>
          <Link
            href="/"
            className="flex items-center gap-1 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            aria-current="page"
          >
            <i className="ri-shopping-cart-line"></i>
Cart
          </Link>
        </li>

        <li>
          <Link
            href="/login-seller"
            className="flex py-2 pl-3 pr-4 text-gray-700  items-center gap-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            <i className="ri-login-box-line"></i>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
