import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from "../constants/cartConstants";

//The first parameter is a state with a default state of cartitems, shipping and
//payment with an empty array.
//The second parameter for the reducer is action.
function cartReducer(state = { cartItems: [], shipping: {}, payment: {} }, action) {
  //use switch case to check action.type
  switch (action.type) {
    case CART_ADD_ITEM:
      //Get the item
      const item = action.payload;
      //Search for the product
      const product = state.cartItems.find(x => x.product === item.product);
      if (product) {
        return {
          //if product exists then replace it with tthe items that come to add_to_cart.
          cartItems:
            state.cartItems.map(x => x.product === product.product ? item : x)
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      //Filter out the product from the cart
      return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
    //Save shipping details
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
    //Save shipping payment
    case CART_SAVE_PAYMENT:
      return { ...state, payment: action.payload };
    default:
      return state
  }
}

export { cartReducer }