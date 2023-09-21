import React from "react";
import NavBar from "../navbar/NavBar";
import SearchSection from "../searchsection/SearchSection";
import FooterFilterBar from "../footerfilterbar/FooterFilterBar";
import PropertyCardParent from "../propertycard/PropertyCardParent";
import Footer from "../footer/Footer";
import "./home.css";


const Home = () => {
  return (
    <div className="main">
      <div className="row justify-content-center">
        <NavBar />
        <SearchSection />
        <PropertyCardParent />
        <FooterFilterBar />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
