import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from "axios";
import "./signin.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {}; // Define an empty errors object

    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with the submission
      console.log("Form is valid:", formData);

      try {
        // Simulate an API call to the backend for user authentication
        const response = await axios.post("/api/login", formData);

        if (response.status === 200) {
          // User authentication successful
          const userData = response.data;
          console.log("Login successful:", userData);

          if (formData.rememberMe) {
            // Save user session or set a token in local storage for remembering the user
          }

          // Perform any necessary actions after successful login, e.g., redirect to a dashboard page
        } else {
          // User authentication failed
          console.log("Login failed");
          // Handle the failed login, e.g., display an error message to the user
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        // Handle any errors that occurred during the login process
      }
    }
  };

  return (
    <div className="Container sign-in-bg">
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form className="border custom-form-content" onSubmit={handleSubmit}>
            <div className="text-center">
              <img
                className="signInLogo image-fluid"
                src={logo}
                alt="Logo"
                width="250"
                height="100"
              />
            </div>
            <h2 className="text-center mb-4">Sign In</h2>
            <div className="form-group">
              <label htmlFor="email">
                <span className="font-weight-bold-sign-in">Email</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <span className="font-weight-bold-sign-in">Password</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                name="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                <span className="font-weight-bold-sign-in">Remember me</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign In
            </button>
            <Link to="/signup" className="btn btn-secondary">
              Go to Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;