import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import logo from "../../assets/logo.png";

const SignIn = () => {
  return (
    <div className="Container sign-in-bg">
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form className="border custom-form-content">
            <div className="text-center">
              <img
                className="signInLogo image-fluid"
                src={logo}
                alt="Logo"
                width="250"
                height="100"
              />
            </div>
            <h2 class="text-center mb-4">Sign In</h2>
            <div class="form-group">
              <label for="email">
                <span className="font-weight-bold-sign-in">Email</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="form-group">
              <label for="password">
                <span className="font-weight-bold-sign-in">Password</span>
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="rememberMe" />
              <label class="form-check-label" for="rememberMe">
                <span className="font-weight-bold-sign-in">Remember me</span>
              </label>
            </div>

            <Link to="/">
              <button type="submit" class="btn btn-primary btn-block">
                Sign Up
              </button>
            </Link>
            <Link to="/signup">
              <button type="submit" class="btn btn-secondary">
                Go to Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
