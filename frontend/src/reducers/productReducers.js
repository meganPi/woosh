import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_REVIEW_SAVE_SUCCESS,
  PRODUCT_REVIEW_SAVE_REQUEST,
  PRODUCT_REVIEW_SAVE_FAIL,
  PRODUCT_REVIEW_SAVE_RESET,
} from '../constants/productConstants';

//The first parameter is a state with a default state of products with an empty array.
//The second parameter for the reducer is action.
function productListReducer(state = { products: [] }, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server to get list of products
    case PRODUCT_LIST_REQUEST:
      //Show loading box.
      return { loading: true, products: [] };
    //Successfully get data from server.
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    //Fails to get data from server
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    // Default case returns the state itself, and the state does not change at all.
    default:
      return state;
  }
}
//The first parameter is a state with a default state of products with an empty array.
//The second parameter for the reducer is action.
function productDetailsReducer(state = { product: { reviews: [] } }, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server to get details of products
    case PRODUCT_DETAILS_REQUEST:
      //Show loading box.
      return { loading: true };
    //Successfully get data from server.
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    //Fails to get data from server.
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    // Default case returns the state itself, and the state does not change at all.
    default:
      return state;
  }
}

//The first parameter is a state with a default state of products with an empty array.
//The second parameter for the reducer is action.
function productDeleteReducer(state = { product: {} }, action) {
  //use switch case to check action.type
  switch (action.type) {
     //Send request to server to delete product
    case PRODUCT_DELETE_REQUEST:
      //Show loading box.
      return { loading: true };
    //Successfully delete data from server.
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, product: action.payload, success: true };
    //Fails to delete data from server.
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    // Default case returns the state itself, and the state does not change at all.
    default:
      return state;
  }
}
//The first parameter is a state with a default state of products with an empty array.
//The second parameter for the reducer is action.
function productSaveReducer(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_SAVE_REQUEST:
      //Show loading box.
      return { loading: true };
    case PRODUCT_SAVE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    //Fails to save data from server.
    case PRODUCT_SAVE_FAIL:
      return { loading: false, error: action.payload };
    // Default case returns the state itself, and the state does not change at all.
    default:
      return state;
  }
}
//The first parameter is a state with a default state of products with an empty array.
//The second parameter for the reducer is action.
function productReviewSaveReducer(state = {}, action) {
  switch (action.type) {
    case PRODUCT_REVIEW_SAVE_REQUEST:
      //Show loading box.
      return { loading: true };
    case PRODUCT_REVIEW_SAVE_SUCCESS:
      return { loading: false, review: action.payload, success: true };
    //Fails to save review from server.
    case PRODUCT_REVIEW_SAVE_FAIL:
      return { loading: false, errror: action.payload };
    case PRODUCT_REVIEW_SAVE_RESET:
      return {};
    // Default case returns the state itself, and the state does not change at all.
    default:
      return state;
  }
}

export {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
};
