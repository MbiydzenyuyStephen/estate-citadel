import React, { Component } from "react";



const Signin = () => {
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
                <h3 class="card-title text-center">Signin</h3>
                <form>
                  <div class="form-group">
                    <label for="email">Email/Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Enter email or username"
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
                  <button type="submit" class="btn btn-primary">
                    Signin
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Signin;