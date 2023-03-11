import Button from "@/components/common/Button";
import ImageTag from "@/components/ImageTag";
import { useStore } from "@/store/GlobalStore";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  const { state, dispatch } = useStore();

  function changeQuantity(item: any, action: "add" | "remove") {
    const quantity = action == "add" ? item.quantity + 1 : item.quantity - 1;

    if (quantity == 0) {
      removeItem(item);
    } else {
      dispatch({ type: "ADD_CART", payload: { ...item, quantity: quantity } });
    }

    console.log(item);
  }

  function removeItem(item: any) {
    dispatch({ type: "REMOVE_CART", payload: item });
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Checkout | WholesalerBase.com | Marketplace for Wholesaler
        </title>
      </Head>

      <main className={styles.main}>
        <h2 className="font-bold text-xl mb-4">Shopping Item List</h2>
        <div className="flex flex-col sm:flex-row w-full mx-auto max-w-[1200px] text-left justify-center px-6 gap-10">
          {state.cart.cartItems.length > 0 ? (
            <>
              <ul className="flex flex-col gap-10">
                {state.cart.cartItems.map((item: any, id: number) => (
                  <li key={id} className="flex gap-4">
                    <div className="flex h-16">
                      <ImageTag
                        src={item.images[0]}
                        alt={item.images[0]}
                        width={100}
                        height={100}
                        className="format-image"
                      />
                    </div>

                    <div className="flex flex-col w-full gap-1 ">
                      <span className="flex gap-1 justify-between">
                        <h2 className="font-bold text-lg font-sans uppercase">
                          {item.name}
                        </h2>
                        <button
                          onClick={() => removeItem(item)}
                          className="hover:text-red-400"
                        >
                          <i className="ri-delete-bin-2-line"></i>
                        </button>
                      </span>

                      <h3 className="text-xs font-mono">
                        <b>CODE:</b> {item.code}{" "}
                      </h3>
                      <p className="text-sm mb-4">{item.description}</p>
                      <div className="flex justify-between font-semibold text-base">
                        <p>
                          ${item.price} X {item.quantity} = $
                          {item.price * item.quantity}
                        </p>

                        <div className="flex items-center gap-1 ">
                          <button
                            onClick={() => changeQuantity(item, "remove")}
                            className="hover:text-emerald-500 items-center flex"
                          >
                            <i className="ri-add-box-line ri-lg"></i>
                          </button>
                          <span className="">{item.quantity}</span>
                          <button
                            onClick={() => changeQuantity(item, "add")}
                            className="hover:text-red-500 flex items-center"
                          >
                            <i className="ri-checkbox-indeterminate-line ri-lg"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="w-full">
                <p className="font-bold mb-2 text-base whitespace-nowrap font-mono">
                  SubTotal({state.cart.cartItems.reduce(
                    (item: any, sum: any) => item + sum.quantity,
                    0
                  )}){" "}: ${state.cart.cartItems.reduce(
                    (item: any, sum: any) => item + sum.quantity * sum.price,
                    0
                  )}
                </p>
                <Button
                  theme="yellow"
                  leftIcon={<i className="ri-paypal-line"></i>}
                >
                  CheckOut
                </Button>
              </div>
            </>
          ) : (
            "No Item added"
          )}
        </div>
      </main>
    </>
  );
}
