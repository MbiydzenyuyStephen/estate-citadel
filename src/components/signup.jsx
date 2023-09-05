import React, { Component } from "react";

const Signup = () => {
  return (
    <div class="container">
      <h1 class="row justify-content-center mt-5">ESTATE CITADEL</h1>
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <img
                class="col-md-"
                src="/images/logo.png"
                alt="Logo"
                width="250"
                height="100"
              />
              <h3 class="card-title text-center">Signup</h3>
              <form>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="fullname">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="fullname"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phonenumber">Phone Number</label>
                  <input
                    type="number"
                    class="form-control"
                    id="phonenumber"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="confirm-password">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirm-password"
                    placeholder="Confirm password"
                    required
                  />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="terms" />
                  <label class="form-check-label" for="terms">
                    I accept the terms and conditions
                  </label>
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="landlord"
                  />
                  <label class="form-check-label" for="terms">
                    I am a Landlord
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
