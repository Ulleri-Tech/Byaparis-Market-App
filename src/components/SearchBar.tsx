import { useState } from "react";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}
export default function Search({onSearch}:SearchProps) {
const [searchTerm,setSearchTerm] = useState("") 

  function handleSearch(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    onSearch(searchTerm)
  }
  return (
    <form onSubmit={handleSearch} action="" className="flex justify-center px-4">
      <div className="flex items-center sm:min-w-[400px] w-full max-w-[1000px]">
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
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            autoComplete="off"
            className="bg-white shadow-md  border border-gray-700 text-gray-900 rounded-lg block w-full pl-10 p-2.5  "
            placeholder="Search any products..."
            required
          />
        {searchTerm.length>0 && (
          <button type="button" onClick={()=>setSearchTerm('')} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 hover:text-gray-900 bg-transparent">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 10-1.414-1.414L10 8.586l-2.293-2.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>)}
        </div>
        <button
          type="submit"
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
      </div>
    </form>
  );
}
