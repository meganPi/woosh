import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {
  //define useState hooks with default values of empty arrays.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  //access userRegister from the redux store.
  const userRegister = useSelector(state => state.userRegister);
  //from userRegister, access loading, error and userInfo.
  const { loading, userInfo, error } = userRegister;
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
    dispatch(register(name, email, password));
    //use dispatch to call signing for the name, email and password.
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
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
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        <li>
          Already have an account?
          <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" >Create your Woosh account</Link>

        </li>

      </ul>
    </form>
  </div>
}
export default RegisterScreen;