
export default function Footer (){
    return (
      <footer className="w-full flex flex-col relative">

      <div className="w-full flex justify-center items-center  mx-auto py-2 border-t border-gray-700">
       <ul className="flex flex-col sm:flex-row text-base gap-2 sm:gap-6">
          <li>
            <a href="#" className="font-bold ">
              Conditions of Use
            </a>
          </li>
          <li>
            <a href="#" className="font-bold ">
              Privacy Notice
            </a>
          </li>
          <li>
            <span className="text-gray-700">
              &copy; 2023, Wholesalersbase.com
            </span>
          </li>
        </ul>
      </div>
    </footer>
    );
  }