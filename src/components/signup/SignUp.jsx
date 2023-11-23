import React, { useState } from "react";
import Joi from "joi";
import axios from "axios";
import "./signup.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email:"",
    password:"",
    confirmPassword:"",
    isLandlord: false,
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    username: Joi.string().aphanum().min(3).max(30).required(),
    fullname:Joi.string().min().required(),
    email: Joi.string().email().required(),
    password:Joi.string().min(6).required(),
    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .label("Confirm Password")
      .messages({ "any.only ": "{{#label}} does not match"}),

      isLandlord:Joi.boolean().required(),
      acceptTerms: Joi.boolean().valid(true).reqired(),
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({...formData, [name]: fieldValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  try {
    // i vallidate my forms data
    const { error } = schema.validate(formData, {abortEarly: false});

    if (error) {
      const validationErrors = {};
      for (let item of error.details) {
        validationErrors[item.path[0]] = item.message;
      }
      setErrors(validationErrors);
      return;
    }

    //clear any error
      setErrors({});

      //make API request to submit form data
      const response = await axios.post("/api/signup", formData);
      console.log(response.data);//handles success response

      //clear form data after sucessful submission
      setFormData({
        username: "",
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLandlord: false,
        acceptTerms: false,
      });
  } catch(error) {
    console.log(error); // To handle error response
  }
};

  return (
    <div className="Container sign-up-bg">
      <div className=" row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <form className="border custom-form-content" onSubmit={handleSubmit
          }>
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
              {errors.username && ( 
                <div className="error-message">{errors.username}</div>
              )}
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
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
              {errors.fullname && ( 
                <div className="error-message">{errors.fullname}</div>
              )}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
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
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error-message">{errors.confirmPassword}</div>
              )}
            </div>
            <div class="form-check mb-3">
              <input 
               type="checkbox"
               class="form-check-input"
               id="landlord"
               name="isLandlord"
                checked={formData.isLandlord}
                onChange={handleChange}
                />
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
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <label class="form-check-label" for="TermsAndConditions">
                <span className="font-weight-bold-sign-up">
                  I accept the terms and conditions
                </span>
              </label>
              {errors.acceptTerms && (
                <div className="error-message">{errors.acceptTerms}</div>
              )}
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
