import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import logo from '../../assets/logo.png';

const SignIn = () => {
  return (
    <div className="signInContainer">
      <h1 className="signInHeader">ESTATE CITADEL</h1>
      <div className="signInForm">
        <img className="signInLogo" src={logo} alt="Logo" width="250" height="100" />
        <h3 className="signinFormTitle">Signin</h3>
        <form className="formbody">
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email "
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SignIn
          </button>
          <Link to="/signup">
            <button className="signInAccountButton">I dont have an account</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
