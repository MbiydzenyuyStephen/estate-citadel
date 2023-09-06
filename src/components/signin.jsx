import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";

const Signin = () => {
  return (
    <body>
      <div className="container">
        <h1 className="header">ESTATE CITADEL</h1>
        <div className="form">
          <img
            className="logo"
            src="/images/logo.png"
            alt="Logo"
            width="250"
            height="100"
          />
          <h3 className="signinFormTitle">Signin</h3>
          <form>
            <div className="form-group">
              <label for="email">Email/Username</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter email or username"
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
              Signin
            </button>
            <Link to="/">
              <button className="accountButton">I dont have an account</button>
            </Link>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Signin;
