export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_CART: 'ADD_CART',
    ADD_ORDERS: 'ADD_ORDERS',
}

const reducers = (state:any, action:any) => {
    switch(action.type){
        case ACTIONS.NOTIFY:
            return {
                ...state,
                notify: action.payload
            };
        case ACTIONS.AUTH:
            return {
                ...state,
                auth: action.payload
            };
        case ACTIONS.ADD_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.payload]
            };
      
        case ACTIONS.ADD_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        default:
            return state;
    }
}

export default reducers