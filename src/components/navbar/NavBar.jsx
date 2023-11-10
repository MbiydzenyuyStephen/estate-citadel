import React from "react";
import logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container className="navbar-width" >
        <Navbar.Brand >
          <a class="navbar-brand">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <li className="nav-item">
                <Link
                  style={{ fontSize: "25px", hover: "black" }}
                  className="nav-link navtext"
                  id="navBarLinks"
                  to="/BuyHouse"
                >
                  Buy House
                </Link>
              </li>
            </Nav.Link>
            <Nav.Link>
              <li className="nav-item">
                <Link
                  style={{ fontSize: "25px" }}
                  className="nav-link navtext"
                  id="navBarLinks"
                  to="/RentHouse"
                >
                  Rent House
                </Link>
              </li>
            </Nav.Link>
            <Nav.Link>
              <li className="nav-item navtext">
                <Link
                  style={{ fontSize: "25px" }}
                  className="nav-link navtext"
                  id="navBarLinks"
                  to="/BuyPlot"
                >
                  Buy Plot
                </Link>
              </li>
            </Nav.Link>
            <Nav.Link>
              <li className="nav-item">
                <Link
                  style={{ fontSize: "25px" }}
                  className="nav-link navtext"
                  id="navBarLinks"
                  to="/RentTruck"
                >
                  Rent Truck
                </Link>
              </li>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <li className="nav-item">
                <Link
                  className="nav-link navtext"
                  style={{ fontSize: "25px" }}
                  id="navBarLinks"
                  to="/help"
                >
                  Help
                </Link>
              </li>
            </Nav.Link>
            <NavDropdown
              style={{ fontSize: "25px" }}
              title=<FaUser />
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link
                  style={{ fontSize: "25px" }}
                  id="drop-down-link"
                  to="/signin"
                >
                  Sign Out
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
