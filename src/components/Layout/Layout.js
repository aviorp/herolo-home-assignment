import React from "react";
import NavbarComponent from "../Navbar/Navbar";
import Search from "../Search/Search";
import "./Layout.css";
import { Row, Col } from "react-bootstrap";
const Layout = () => {
  return (
    <div className="layout">
      <Row>
        <Col>
          <NavbarComponent />
        </Col>
      </Row>
      <Search />
    </div>
  );
};

export default Layout;
