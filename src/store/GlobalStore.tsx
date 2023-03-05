import { getUserData } from "@/utils/actions";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducers from "./Reducers";

const DataContext = createContext<any>({});

export const useStore = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    auth: {},
    cart: {cartItems: []},
    orders: [],
  };
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    const login_user = localStorage.getItem("token");
    if (login_user) {
        getUserData().then(res=>{
            dispatch({
                type: "AUTH",
                payload: {
                  token: res.token,
                  user: res.user,
                },
              });
        }).catch(err=>{
            localStorage.removeItem("token")
            console.log(err)
        })
    }
  },[]);

  useEffect(() => {
    // const cart_storage = localStorage.getItem("__cart__");
    // if (cart_storage) {
    //   const exiting_cart_items = JSON.parse(cart_storage);
    //   if (exiting_cart_items.length > 0)
    //     dispatch({ type: "ADD_CART", payload: exiting_cart_items });
    // }
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

//     getData('categories').then(res => {
//         if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

//         dispatch({
//             type: "ADD_CATEGORIES",
//             payload: res.categories
//         })
//     })

// }, [])

// useEffect(() => {
//     if(auth.token){
//         getData('order', auth.token)
//         .then(res => {
//             if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

//             dispatch({type: 'ADD_ORDERS', payload: res.orders})
//         })

//         if(auth.user.role === 'admin'){
//             getData('user', auth.token)
//             .then(res => {
//                 if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

//                 dispatch({type: 'ADD_USERS', payload: res.users})
//             })
//         }
//     }else{
//         dispatch({type: 'ADD_ORDERS', payload: []})
//         dispatch({type: 'ADD_USERS', payload: []})
//     }
// },[auth.token])
