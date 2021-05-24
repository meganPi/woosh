import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function SigninScreen(props) {
  //define useState hooks with default values of empty arrays.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //access userSignin from the redux store.
  const userSignin = useSelector(state => state.userSignin);
  //from userSignin, access loading, error and userInfo.
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  //define const for redirect. If it exists then split it based on the = sign.
  //We want the section 1, the second item in the array.
  //If it does not exist, the user gets redirected to home page.
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
      //if user info exists, redirect user to the home page.
    }
    return () => {
      //
    };
  }, [userInfo]);
  //If userInfo state changes, then the above if statement code will run.

  const submitHandler = (e) => {
    //prevent the page from refreshing when the submitHandler is called.
    e.preventDefault();
    dispatch(signin(email, password));
    //use dispatch to call signing for the email and password.
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to Woosh?
        </li>
        <li>
          <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your Woosh account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default SigninScreen;