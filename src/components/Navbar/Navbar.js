import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect bg="" expand="lg">
        <div>
          <Link>
            <Navbar.Brand>Weather-App</Navbar.Brand>
          </Link>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
