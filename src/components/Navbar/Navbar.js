import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";


const NavbarComponent = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="xl"
        className="wa-theme navbar navbar-default"
        variant="dark"
      >
        <Link to={"/home"} className="wa-logo-link">
          <Navbar.Brand>Weather-App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" mr-0">
            <Nav.Link as={Link} to={"/home"} className="link">
              Home
          </Nav.Link>
            <Nav.Link as={Link} to={"/favorites"} className="link">
              Favorites
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;
