export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
  REMOVE_CART: "REMOVE_CART",
  ADD_ORDERS: "ADD_ORDERS",
};

const reducers = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    case ACTIONS.AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case ACTIONS.ADD_CART:
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (item: any) => item._id == newItem._id
      );
      const cartItems = existingItem
        ? state.cart.cartItems.map((item: any) =>
            item._id == existingItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      return {
        ...state,
        cart: { cartItems: cartItems },
      };

    case ACTIONS.REMOVE_CART:
      const filteredCart = state.cart.cartItems.filter(
        (item: any) => item._id != action.payload._id
      );
      return {
        ...state,
        cart: { cartItems: filteredCart },
      };

    case ACTIONS.ADD_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
