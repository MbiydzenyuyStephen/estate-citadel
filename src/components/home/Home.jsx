import React from "react";
import NavBar from "../navbar/NavBar";
import { FaSistrix } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <div className="parent-div">
      <NavBar />

      <h1 className="search-area"></h1>

      <div className="search-section">
        <div class="row">
          <div class="col-md-8">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control input-text"
                placeholder="Search products...."
                
                />
                <FaSistrix/>
              </div>
            
              
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
