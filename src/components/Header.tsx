export default function Header() {
  return (
    <nav className="bg-white flex gap-10 justify-between w-full max-w-[1000px] m-auto rounded mt-4 ">
        <a href="/" className="flex items-center">
          <img
            src="./byapar-market.png"
            width="150px"
            height="150px"
            alt="Wholesaler's Base Logo"
          />
        </a>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 max-w-3xl"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."
            ></input>
          </div>
          <ul className="flex p-4 text-lg rounded-lg flex-row space-x-8 mt-0 font-medium border-0 bg-white ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Services
              </a>
            </li>
          </ul>
        </div>

    </nav>
  );
}
