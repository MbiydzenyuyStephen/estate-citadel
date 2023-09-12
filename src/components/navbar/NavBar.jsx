import React from "react";
import logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">
          <Link to="/Home">
            <img src={logo} alt="Logo" />
          </Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" >
              <Link className="nav-link" id="navBarLinks" to="/BuyHouse">
                Buy a House
              </Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" id="navBarLinks" to="/RentHouse">
                Buy a House
              </Link>
            </li>
            <li className="nav-item" id="navBarLinks">
              <Link className="nav-link" id="navBarLinks" to="/BuyPlot">
                Buy a Plot
              </Link>
            </li>
          </ul>

          <div className="d-flex" role="search">
              <Link className="nav-link" id="navBarLinks" to="/BuyPlot">
                Rent a Truck
              </Link>
            <Link  to="/Help" className="nav-link"  id="navBarLinks" >
                Help
            </Link>
            <Link  to="/Profile" className="nav-link"  id="navBarLinks">
                <FaUser/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
