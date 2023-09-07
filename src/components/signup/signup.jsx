import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";
import { Link } from "react-router-dom";
import logo from './logo.png'

const SignUp = () => {
  return (
    <div className="signupBody">
      <div className="container">
        <h1 className="header">ESTATE CITADEL</h1>
        <div className="form">
          <img
            className="logo"
            src={logo}
            alt="Logo"
            width="250"
            height="100"
          />
          <h3 className="signinFormTitle">Sign Up</h3>
          <form>
            <div className="form-group">
              <label for="email">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="form-group">
              <label for="fullname">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="form-group">
              <label for="phonenumber">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="phonenumber"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
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
            <div className="form-group">
              <label for="confirm-password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" for="terms">
                I accept the terms and conditions
              </label>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="landlord" />
              <label className="form-check-label" for="terms">
                I am a Landlord
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <Link to="/">
              <button className="accountButton">I have an account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
