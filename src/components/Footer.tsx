

export default function Footer (){

    return (
      <footer className="w-full flex flex-col relative">
      {/* <div className=" w-full flex justify-center items-center mx-auto px-2 py-1 md:py-2">
        <a href="#" className="text-white text-base leading-4 text-center">
          Back to top
        </a>
      </div> */}
      <div className=" w-full flex flex-col text-center md:text-left md:flex-row justify-center md:justify-between items-center md:items-start mx-auto px-2 md:px-48 lg:px-96 py-4 md:py-10">
        {/* <section className="my-2 md:my-0">
          <h5 className="font-bold text-white text-base">Get to Know Us</h5>
          <ul className="text-gray-200 text-base">
            <li className="leading-5">
              <a href="#">Careers</a>
            </li>
            <li className="leading-5">
              <a href="#">Blog</a>
            </li>
            <li className="leading-5">
              <a href="#">About Wholesalersbase</a>
            </li>
            <li className="leading-5">
              <a href="#">Sustainability</a>
            </li>
        
          </ul>
        </section>
        <section className="my-2 md:my-0">
          <h5 className="font-bold text-white text-base">Make Money with Us</h5>
          <ul className="text-gray-200 text-base">
            <li className="leading-5">
              <a href="#">Sell products on Wholesalersbase</a>
            </li>
            <li className="leading-5">
              <a href="#">Advertise Your Products</a>
            </li>
            <li className="leading-5">
              <a href="#">Self-publish with Us</a>
            </li>
     
          </ul>
        </section>
      
        <section className="my-2 md:my-0">
          <h5 className="font-bold text-white text-base">Let Us Help You</h5>
          <ul className="text-gray-200 text-base">
          
            <li className="leading-5">
              <a href="#">Your Account</a>
            </li>
            <li className="leading-5">
              <a href="#">Your Orders</a>
            </li>
        
            <li className="leading-5">
              <a href="#">Help</a>
            </li>
          </ul>
        </section> */}
      </div>
     
      <div className="w-full flex justify-center items-center  mx-auto py-2 border-t border-gray-700">
        <ul className=" flex text-base">
          {/* <li>
            <a href="#" className="font-bold xl:mr-10 mr-3">
              Conditions of Use
            </a>
          </li>
          <li>
            <a href="#" className="font-bold xl:mr-10 mr-3">
              Privacy Notice
            </a>
          </li> */}
          
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

