import React from "react";
import NavBar from "../navbar/NavBar";
import "./home.css";
import SearchSection from "../searchsection/SearchSection";

import StaticCard from "../staticcard/StaticCard";

const Home = () => {
  return (
    <div className="main">
      <div className="row justify-content-center">
        <NavBar />
        <SearchSection />
        <StaticCard />
      </div>
    </div>
  );
};

export default Home;
