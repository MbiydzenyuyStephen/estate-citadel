import React, { useState, useEffect, useCallback } from "react";
import "./signup.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Joi from "joi";
import axios from "axios";

const tldList = ['com', 'net', 'org'];

const schema = Joi.object({
  fullName: Joi.string().min(3).max(30).required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({ tlds: { allow: tldList } }).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .messages({ 'any.only': '{{#label}} does not match' }),
  isLandlord: Joi.boolean().optional(),
  acceptTerms: Joi.boolean().valid(true).required(),
});

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isLandlord: false,
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors);
    } else {
      setErrors({});
    }
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with the submission
      console.log('Form is valid:', formData);
    }
  };

  return (
    <div className="Container sign-up-bg">
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form onSubmit={handleSubmit} className="border custom-form-content">
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
                name="username"
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username }
            </div>
            <div class="form-group">
              <label for="fullname">
                <span className="font-weight-bold-sign-up">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                class="form-control"
                id="fullname"
                placeholder="Enter full name "
              />
              {errors.fullName}
            </div>
            <div class="form-group">
              <label for="email">
                <span className="font-weight-bold-sign-up">Email</span>
              </label>
              <input
                name="email"
                type="text"
                class="form-control"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email}
            </div>
            <div class="form-group">
              <label for="password">
                <span className="font-weight-bold-sign-up">Password</span>
              </label>
              <input
                name="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password }
            </div>
            <div class="form-group">
              <label for="confirmpassword">
                <span className="font-weight-bold-sign-up">
                  Confirm Password
                </span>
              </label>
              <input
                name="confirmPassword"
                class="form-control"
                id="confirmpassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword}
            </div>
            <div class="form-check mb-3">
              <input 
              type="checkbox" 
              class="form-check-input" 
              id="landlord"
              name="isLandlord" 
                 checked={formData.isLandlord} 
                 onChange={handleChange} />
              <label class="form-check-label" for="landlord">

                <span className="font-weight-bold-sign-up">
                  Sign Up as a Landlord
                </span>
              </label>
            </div>
            <div class="form-check mb-3">
              <input
                type="checkbox"
                class="form-check-input"
                id="TermsAndConditions"
                checked={formData.acceptTerms} 
                       onChange={handleChange}
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
