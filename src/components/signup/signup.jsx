import React, { useState } from 'react';
import "./signup.css";
import Joi from 'joi-browser';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    fullName: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword: Joi.ref('password'),
    isLandlord: Joi.boolean().required(),
    acceptTerms: Joi.boolean().valid(true).required(),
  });
  
const SignUp = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
      isLandlord: false,
      acceptTerms: false,
    });
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { error } = schema.validate(formData, { abortEarly: false });
  
      if (error) {
        const validationErrors = {};
        error.details.forEach((detail) => {
          validationErrors[detail.path[0]] = detail.message;
        });
        setErrors(validationErrors);
      } else {
        setErrors({});
        // form is valid, proceed with submission
        console.log('Form is valid:', formData);
      }
    };
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' ? checked : value;
      setFormData({ ...formData, [name]: newValue });
    };


  return (
    <div className="Container sign-up-bg">
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form className="border custom-form-content" onSubmit={handleSubmit} >
            <div className="text-center">
              <img
                className="signUpLogo image-fluid"
                src={logo}
                alt="Logo"
                width="250"
                height="100"
              />
            </div>
            <h2 class="text-center mb-4">Sign Up</h2>
            <div class="form-group">
              <label for="username">
                <span className="font-weight-bold-sign-up">Username</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}

              />
            </div>
            <div class="form-group">
              <label for="fullname">
                <span className="font-weight-bold-sign-up">Full Name</span>
              </label>
              <input
                type="fullname"
                class="form-control"
                id="fullname"
                placeholder="Enter full name "
              />
            </div>
            <div class="form-group">
              <label for="email">
                <span className="font-weight-bold-sign-up">Email</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="password">
                <span className="font-weight-bold-sign-up">Password</span>
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="form-group">
              <label for="confirmpassword">
                <span className="font-weight-bold-sign-up">
                  Confirm Password
                </span>
              </label>
              <input
                type="confirmpassword"
                class="form-control"
                id="confirmpassword"
                placeholder="Confirm Password"
              />
            </div>
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="landlord" />
              <label class="form-check-label" for="landlord">
                <span className="font-weight-bold-sign-up">
                  I am a land lord
                </span>
              </label>
            </div>
            <div class="form-check mb-3">
              <input
                type="checkbox"
                class="form-check-input"
                id="TermsAndConditions"
              />
              <label class="form-check-label" for="TermsAndConditions">
                <span className="font-weight-bold-sign-up">
                  I accept the terms and conditions
                </span>
              </label>
            </div>
            <Link to="/">
              <button type="submit" class="btn btn-primary btn-block">
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button type="submit" class="btn btn-secondary">
                Go to Sign In
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
