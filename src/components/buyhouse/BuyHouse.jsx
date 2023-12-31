import React from "react";
import NavBar from "../navbar/NavBar";
import SearchFilterBar from "../searchfilterbar/SearchFIlterBar";
import { FaAngleDown } from "react-icons/fa6";
import Card from "../card/card";
import Map from "../map/Map";
import "./buyhouse.css";

const BuyHouse = () => {
  return (
    <div className="main">
      <div className="row">
        <NavBar />
        <hr />
      </div>
      <div className="row">
        <SearchFilterBar />
        <br />
        <br />
        <hr />
      </div>
      <div className="container map-container">
        <div className="row">
          <div className="col-6 map-col ">
           <Map /> 
          </div>
           <div className="col-6">
            <div className="row">
              <h5>Real Estate & Homes For Sale</h5>
            </div>
            <div className="row">
              <h6 className="d-flex justify-content-start">500 results</h6>
              <h6 className="d-flex justify-content-end text-primary">
                sort: Homes for You <FaAngleDown />
              </h6>
 
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col sm-6">
                    <div className="row mt-5 mb-5">
                      <div className="col-12 col-sm-2 d-flex justify-content-center property-cards">
                        <Card />
                      </div>
                      <div className="col-20 col-lg-2 d-flex justify-content-end property-cards">
                        <Card />
                      </div>
                      <div className="col-12 col-lg-2 d-flex justify-content-center property-cards"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default BuyHouse;
