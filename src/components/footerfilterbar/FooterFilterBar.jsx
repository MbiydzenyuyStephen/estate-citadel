import React from "react";
import "./footerfilterbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const FooterFilterBar = () => {
  const [dropdownStates, setDropdownStates] = useState([
    false, // Real estate dropdown
    false, // Rentals dropdown
    false, // Buy Plot dropdown
    false, // Browse homes dropdown
  ]);

  const toggleDropdown = (index) => {
    const updatedStates = [...dropdownStates];
    updatedStates[index] = !updatedStates[index];
    setDropdownStates(updatedStates);
  };

  return (
    <div className="container">
      <div className="row col-12  justify-content-center mt-5 mb-5">
        <div className="col-12 col-lg-2 mb-5 d-flex justify-content-center">
          <div className={`footer-dropdown ${dropdownStates[0] ? "open" : ""}`}>
            <Link to="/" onClick={() => toggleDropdown(0)}>
              <p className="footer-filter-bar-links">
                Real estate <FaChevronDown />
              </p>
            </Link>
            {dropdownStates[0] && (
              <div className="dropdown-content">
                <Link to="/">Option 1</Link>
                <br />
                <Link to="/">Option 2</Link>
                <br />
                <Link to="/">Option 3</Link>
              </div>
            )}
          </div>
        </div>

        <div className="col-12 col-lg-2 d-flex justify-content-center">
          <div className={`footer-dropdown ${dropdownStates[1] ? "open" : ""}`}>
            <Link to="/" onClick={() => toggleDropdown(1)}>
              <p className="footer-filter-bar-links">
                Rentals <FaChevronDown />
              </p>
            </Link>
            {dropdownStates[1] && (
              <div className="dropdown-content">
                <Link to="/">Option 1</Link>
                <br />
                <Link to="/">Option 2</Link>
                <br />
                <Link to="/">Option 3</Link>
              </div>
            )}
          </div>
        </div>

        <div className="col-12 col-lg-2 d-flex justify-content-center">
          <div className={`footer-dropdown ${dropdownStates[2] ? "open" : ""}`}>
            <Link to="/" onClick={() => toggleDropdown(2)}>
              <p className="footer-filter-bar-links">
                Buy plot <FaChevronDown />
              </p>
            </Link>
            {dropdownStates[2] && (
              <div className="dropdown-content">
                <Link to="/">Option 1</Link>
                <br />
                <Link to="/">Option 2</Link>
                <br />
                <Link to="/">Option 3</Link>
              </div>
            )}
          </div>
        </div>

        <div className="col-12 col-lg-2 d-flex justify-content-center">
          <div className={`footer-dropdown ${dropdownStates[3] ? "open" : ""}`}>
            <Link to="/" onClick={() => toggleDropdown(3)}>
              <p className="footer-filter-bar-links">
                Browse homes <FaChevronDown />
              </p>
            </Link>
            {dropdownStates[3] && (
              <div className="dropdown-content">
                <Link to="/">Option 1</Link>
                <br />
                <Link to="/">Option 2</Link>
                <br />
                <Link to="/">Option 3</Link>
              </div>
            )}
          </div>
        </div>

        <hr />
        <div class="row col-8 mt-5">
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/about">About</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/research">Research</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/help">Help</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/fairhousing">Fair Housing Guide</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/terms of use">Terms of use</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/privacyportal">Privacy portal</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/cookiepreference">Cookie Preference</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/blog">Blog</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/ai">AI</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/mobileapps">Mobile Apps</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/streeteasy">Street Easy</Link>
          </div>
          <div class="col-2 col-lg-2 col-sm-5 mb-3 filter-links">
            <Link to="/showingngtime">ShowingTime+</Link>
          </div>
        </div>
        <div className="row mt-4">
        <div className="col"> 
           <Link to="/signup">
              <h4 className="more-recommended-homes">
              Do Not Sell or Share My Personal Information <FaArrowRightLong />
              </h4>
            </Link></div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FooterFilterBar;

// const FooterFilterBar = () => {
//   return (
//     <div className="container">
//       <div className="row  col-12 justify-content-center mt-5 mb-5">
//         <div className="col-12 col-lg-2 d-flex justify-content-center ">
//           <Link to="/">
//             <p className="footer-filter-bar-links">
//               Real estate <FaChevronDown />
//             </p>
//           </Link>
//         </div>
//         <div className="col-12 col-lg-2 d-flex justify-content-center ">
//           <Link to="/">
//             <p className="footer-filter-bar-links">
//               Rentals <FaChevronDown />
//             </p>
//           </Link>
//         </div>
//         <div className="col-12 col-lg-2 d-flex justify-content-center ">
//           <Link to="/">
//             <p className="footer-filter-bar-links">
//               Buy Plot <FaChevronDown />
//             </p>
//           </Link>
//         </div>
//         <div className="col-12 col-lg-2 d-flex justify-content-center ">
//           <Link to="/">
//             <p className="footer-filter-bar-links">
//               Browse homes
//               <FaChevronDown />
//             </p>
//           </Link>
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default FooterFilterBar;
