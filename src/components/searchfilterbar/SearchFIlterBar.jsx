import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./searchfilterbar.css";

const SearchFilterBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <input
          className="search-bar-of-search-filter-bar"
            type="text"
            id="search"
            placeholder="Enter an address,Region, City, Town, Quater"
          ></input>
          <Link to="/">
            <button className="btn btn-light"> <h6>For Sale  <FaAngleDown/></h6></button>
          </Link>
          <Link to="/">
            <button className="btn btn-light"> <h6> Price  <FaAngleDown/></h6></button>
          </Link>
          <Link to="/">
            <button className="btn btn-light"> <h6>Beds & Baths  <FaAngleDown/></h6></button>
          </Link>
          <Link to="/">
            <button className="btn btn-light"> <h6>Home Type  <FaAngleDown/></h6></button>
          </Link>
          <Link to="/">
            <button className="btn btn-light"> <h6>More  <FaAngleDown/></h6></button>
          </Link>
          <Link to="/">
            <button className="btn btn-primary"> <h6>save search  <FaAngleDown/></h6></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
