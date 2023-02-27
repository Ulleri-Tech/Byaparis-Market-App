import { useStore } from "@/store/GlobalStore";
import Link from "next/link";
import ImageTag from "../ImageTag";

const ProductItem = ({ product, handleCheck }: any) => {
  const { dispatch } = useStore()
  
  ;
  function addData() {
    dispatch({ type: "ADD_CART", payload: [product] });
    const existing_items = localStorage.getItem("__cart__");
    if (existing_items && existing_items.length>0) {
      let new_cart = JSON.parse(existing_items)
      new_cart.push(product)
      localStorage.setItem("__cart__", JSON.stringify(new_cart));
    } else {
      localStorage.setItem("__cart__", JSON.stringify([product]));
    }
  }
  return (
    <div className="w-[18rem] bg-white border border-gray-200 rounded-lg shadow ">
      <ImageTag src={product.url} alt={product.url} width={300} height={300} />

      <div className="px-5 pb-5 pt-2">
        <div className="flex flex-col text-left">
          <Link href="#">
            <h5
              className="text-xl font-semibold tracking-tight text-gray-900 "
              title={product.title}
            >
              {product.title}
            </h5>
          </Link>

          <p className="card-text" title={product.description}>
            {product.description}
          </p>

          {product.inStock > 0 ? (
            <h6 className="text-danger">In Stock: {product.inStock}</h6>
          ) : (
            <h6 className="text-danger">Out Stock</h6>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <h6 className="text-3xl font-bold text-gray-900 ">
            ${product.price}
          </h6>
          <button
            onClick={addData}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
