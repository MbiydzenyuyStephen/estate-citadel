import React from "react";
import { BsSearch } from "react-icons/bs";
import "./searchsection.css";

const SearchSection = () => {
  return (
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
          <button className="btn btn-light" type="button">
            <BsSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
