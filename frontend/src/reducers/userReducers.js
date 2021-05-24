import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../constants/userConstants";

//The first parameter is a state with a default state with an empty array.
//The second parameter for the reducer is action.
function userSigninReducer(state = {}, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server sign user in
    case USER_SIGNIN_REQUEST:
      //Show loading box.
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      //Successfully sign user in..
      return { loading: false, userInfo: action.payload };
    //user sign in fails.
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    //log the user out.
    case USER_LOGOUT:
      return {};
    // Default case returns the state itself, and the state does not change at all.
    default: return state;
  }
}

function userUpdateReducer(state = {}, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server update user details
    case USER_UPDATE_REQUEST:
      //Show loading box.
      return { loading: true };
    //Successfully update user details
    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    //user update fails.
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    // Default case returns the state itself, and the state does not change at all.
    default: return state;
  }
}

function userRegisterReducer(state = {}, action) {
  //use switch case to check action.type
  switch (action.type) {
    //Send request to server register user
    case USER_REGISTER_REQUEST:
      //Show loading box.
      return { loading: true };
    //Successfully register user
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    //user register fails.
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    // Default case returns the state itself, and the state does not change at all.
    default: return state;
  }
}
export {
  userSigninReducer, userRegisterReducer, userUpdateReducer
}