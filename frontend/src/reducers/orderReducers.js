import {
  ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL,
  MY_ORDER_LIST_REQUEST, MY_ORDER_LIST_SUCCESS, MY_ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL, ORDER_DELETE_REQUEST, ORDER_DELETE_SUCCESS, ORDER_DELETE_FAIL
} from "../constants/orderConstants";

//The first parameter is a state with a default state of products with an empty array.
//The second parameter for the reducer is action.
function orderCreateReducer(state = {}, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server to create order
    case ORDER_CREATE_REQUEST:
      //Show loading box.
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, order: action.payload, success: true };
    case ORDER_CREATE_FAIL:
      //Fails to create order
      return { loading: false, error: action.payload };
    default: return state;
  }
}


function orderDetailsReducer(state = {
  order: {
    orderItems: [],
    shipping: {},
    payment: {}
  }
}, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server to get order details
    case ORDER_DETAILS_REQUEST:
      //Show loading box.
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      //Fails to get data from server
      return { loading: false, error: action.payload };
    default: return state;
    // Default case returns the state itself, and the state does not change at all.
  }
}


function myOrderListReducer(state = {
  orders: []
}, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server to get list of my orders
    case MY_ORDER_LIST_REQUEST:
      //Show loading box.
      return { loading: true };
    case MY_ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case MY_ORDER_LIST_FAIL:
      //Fails to get data from server
      return { loading: false, error: action.payload };
    default: return state;
    // Default case returns the state itself, and the state does not change at all.
  }
}

function orderListReducer(state = {
  orders: []
}, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server to get list of all orders
    case ORDER_LIST_REQUEST:
      //Show loading box.
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_LIST_FAIL:
      //Fails to get data from server
      return { loading: false, error: action.payload };
    default: return state;
    // Default case returns the state itself, and the state does not change at all.
  }
}

function orderPayReducer(state = {
  order: {
    orderItems: [],
    shipping: {},
    payment: {}
  }
}, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server to get order payments
    case ORDER_PAY_REQUEST:
      //Show loading box.
      return { loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAIL:
      //Fails to get data from server
      return { loading: false, error: action.payload };
    default: return state;
    // Default case returns the state itself, and the state does not change at all.
  }
}

function orderDeleteReducer(state = {
  order: {
    orderItems: [],
    shipping: {},
    payment: {}
  }
}, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server to delete orders
    case ORDER_DELETE_REQUEST:
      //Show loading box.
      return { loading: true };
    case ORDER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ORDER_DELETE_FAIL:
      //Fails to get data from servers
      return { loading: false, error: action.payload };
    default: return state;
    // Default case returns the state itself, and the state does not change at all.
  }
}
export {
  orderCreateReducer, orderDetailsReducer,
  orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer
}