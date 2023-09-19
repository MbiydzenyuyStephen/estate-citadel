import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import "./searchsection.css";
import Card from "../card/card";
import { Link } from "react-router-dom";

const SearchSection = () => {
  return (
    <div>
      <div className="bg-image vh-100 d-flex justify-content-center align-items-center">
        <div className="container mt-5 mb-5">
          <h1 className="text-center text-white">
            Discover A Place You Will Love To Live In
          </h1>
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Enter an address,Region, City, Town, Quater . . ."
            />
            <button className="btn btn-light search-icon" type="button">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row mt-5 mb-5">
              <h2>Homes For You</h2>
              <h6>Based on your search history</h6>
              <div className="col-12 col-lg-4 d-flex justify-content-center searchcards">
                <Card />
              </div>
              <div className="col-12 col-lg-4 d-flex justify-content-center searchcards">
                <Card />
              </div>
              <div className="col-12 col-lg-2 d-flex justify-content-center searchcards">
                <Card />
              </div>
            </div>
            <Link to="/signup">
              <h4 className="more-recommended-homes">
                <FaArrowDown /> More recommended homes
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
