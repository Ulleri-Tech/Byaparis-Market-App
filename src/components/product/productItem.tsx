import { useStore } from "@/store/GlobalStore";
import Link from "next/link";
import Button from "../common/Button";
import ImageTag from "../ImageTag";

const ProductItem = ({ product, handleCheck }: any) => {
  const { state, dispatch } = useStore();

  function addToCartHandler() {
    const existItem = state.cart.cartItems.find(
      (item:any) => item._id== product._id
    );
   const quantity = existItem ? (existItem?.quantity || 0) + 1 : 1;
    dispatch({ type: "ADD_CART", payload: { ...product, quantity: quantity } });
    // const existing_items = localStorage.getItem("__cart__");p>f

    // if (existing_items && existing_items.length > 0) {
    //   let new_cart = JSON.parse(existing_items);

    //   new_cart.push(product);

    //   localStorage.setItem("__cart__", JSON.stringify(new_cart));
    // } else {
    //   localStorage.setItem("__cart__", JSON.stringify({product, quantity:1}));
    // }
  }

  return (
    <div className="w-[18rem] bg-white border border-gray-200 rounded-lg shadow ">
      <div className="flex h-48">
        <ImageTag
          src={product.images[0]}
          alt={product.images[0]}
          width={300}
          height={300}
          className="format-image"
        />
      </div>
      <div className="px-5 pb-5 pt-2 text-base">
        <div className="flex flex-col text-left">
          <Link href="#">
            <h3
              className="text-xl font-semibold tracking-tight text-gray-900 "
              title={product.name}
            >
              {product.name}
            </h3>
          </Link>

          <p className="font-light mb-1" title={product.description}>
            {product.description.length > 90
              ? product.description.slice(0, 90) + "..."
              : product.description}
          </p>

          {product.inStock > 0 ? (
            <h6 className="text-danger">In Stock: {product.inStock} Unit</h6>
          ) : (
            <h6 className="text-danger">Out Stock</h6>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <h6 className="text-3xl font-bold text-gray-900 ">
            ${product.price}
          </h6>
          <Button theme="blue" onClick={addToCartHandler}>
            {" "}
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
