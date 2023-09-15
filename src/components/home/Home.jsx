import React from "react";
import NavBar from "../navbar/NavBar";
import "./home.css";
import SearchSection from "../searchsection/SearchSection";
import Card from "../card/card";
import SecondCard from "../secondcard/SecondCard";

const Home = () => {
  return (
    <div className="main">
      <div className="row justify-content-center">
        <NavBar />
        <SearchSection />
        <div className="col-8 ml-12">
          <div className="row mt-5 mb-5">
          <h2>Homes for you </h2>
          <h6>Based on your search history</h6>
            <div className="col-12 col-lg-4">
              <Card />
            </div>
            <div className="col-12 col-lg-4">
              <Card />
            </div>
            <div className="col-12 col-lg-4">
              <Card />
            </div>
          </div>
        </div>
        <div className="col-8 ml-12">
          <div className="row mt-5 mb-5">
            <div className="col-12 col-lg-4">
              <SecondCard />
            </div>
            <div className="col-12 col-lg-4">
              <SecondCard />
            </div>
            <div className="col-12 col-lg-4">
              <SecondCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
