import ImageTag from "@/components/ImageTag";
import { useStore } from "@/store/GlobalStore";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  const { state } = useStore();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Checkout | WholesalerBase.com | Marketplace for Wholesaler
        </title>
      </Head>
      <main className={styles.main}>
        <h2 className="font-semibold text-xl pb-4">This is Checkout Page</h2>
        <div className="flex w-full mx-auto text-left justify-center">
          {state.cart.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {state.cart.map((item: any, id:number) => (
                <li key={id} className="flex gap-2 h-20">
                  <ImageTag
                    src={item.url}
                    className="object-cover"
                    alt="saler's Base Logo"
                    width={100}
                    height={100}
                    priority
                  />
                <div className="flex flex-col w-full">
                    <h2 className="font-bold">{item.name}</h2>
                    <p>{item.description}</p>
                    <div className="flex justify-between font-semibold"><p>${item.price}</p> 
                    
                    <div className="flex items-center">
                        <button className="border border-emerald-500 text-emerald-500 px-2 rounded-lg hover:bg-emerald-500 hover:text-white text-lg">-</button>
                        <p className="px-2">1</p>
                        <button className="border border-emerald-500 px-2  text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white text-lg">+</button>
                        </div></div>
                </div>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}
