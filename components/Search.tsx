import { useQuery } from "react-query";
import searchProducts from "../utils/actions";
import React from "react";

import useDebounce from "../utils/useDebounce";
import ProductItem from "./product/productItem";
import { ALL_PRODUCTS } from "@/utils/constant";
interface CustomEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

export default function Search() {

  const [query, setQuery] = React.useState("");
  const debounedQuery = useDebounce(query, 300);

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchProducts", debounedQuery],
    () => searchProducts(debounedQuery),
    {
      enabled: debounedQuery.length > 0,
    }
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className="search-message"> Loading... </div>;
    }

    if (isError) {
      return <div className="search-message">Something went wrong</div>;
    }

    if (isSuccess) {
       return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-6">
      {
        data.length === 0 
        ? <h2>No Products</h2> 

        : data.map((product,_id) => (
          <ProductItem keys={_id} product={product} handleCheck={_id} />
        ))
      }
    </div>
    }

    return <></>;
  };

  const showDefaultProduct = ()=>{
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-6">
    {
    
    ALL_PRODUCTS.slice(0,6).map((product,_id) => (
        <ProductItem keys={_id} product={product} handleCheck={_id} />
      ))
    }
  </div>
  }

  const handleQueryChange = (event: CustomEvent) => {
    setQuery(event.target.value);
    console.log(query);
  };

  const handleSearch = () => {
    console.log("Make Full search");
  };
  return (
    <>
        <div className="flex w-full justify-center px-4 ">
          <form className="flex items-center mt-10 min-w-[400px] w-full max-w-[1000px]   ">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="ri-search-line focus:text-blue-600"></i>
              </div>
              <input
                type="text"
                id="search"
                value={query}
                onChange={handleQueryChange}
                className="bg-white shadow-md  border-2 border-gray-700 text-gray-900 rounded-lg block w-full pl-10 p-2.5  "
                placeholder="Search any products..."
                required
              />
            </div>
            <button
              type="button"
              onClick={handleSearch}
              className="inline-flex shadow-md items-center py-3 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300  "
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </form>
        </div>
         
        <div>{query.length > 0 ? renderResult() : showDefaultProduct()}</div>
            
    </>
  );
}
