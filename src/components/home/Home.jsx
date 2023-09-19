import React from "react";
import NavBar from "../navbar/NavBar";
import "./home.css";
import SearchSection from "../searchsection/SearchSection";
import StaticCard from "../propertycard/PropertyCardParent";
import FooterFilterBar from "../footerfilterbar/FooterFilterBar";
import PropertyCardParent from "../propertycard/PropertyCardParent";

const Home = () => {
  return (
    <div className="main">
      <div className="row justify-content-center">
        <NavBar />
        <SearchSection />
        <div className="row">
        <StaticCard />
        </div>
        <PropertyCardParent />
        <FooterFilterBar />
      </div>
    </div>
  );
};

export default Home;
