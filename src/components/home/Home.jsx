import React from "react";
import NavBar from "../navbar/NavBar";
import { FaSistrix } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <div className="parent-div">
      <NavBar />
      
      <div className="search-section">
        <div class="row">
          <div class="col-md-8">
          <h1 className="search-section-header">Discover a place you'll love to live</h1>

            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control input-text"
                placeholder="Search location, Neighborhooh, City, Quater..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
