import React from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import HomePage from '../../components/HomePage/HomePage';
import Favorites from '../../components/Favorites/Favorites';
import { Route, Redirect } from "react-router-dom";
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
      <Row className="router-outlet">
        <Route path="/home" exact component={HomePage} />
        <Route path="/favorites" component={Favorites} />
        <Redirect from="/" to="/home" />
      </Row>
    </div>
  );
};

export default Layout;
