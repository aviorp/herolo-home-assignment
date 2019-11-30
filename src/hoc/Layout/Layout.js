import React from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import HomePage from '../../components/HomePage/HomePage';
import Favorites from '../../components/Favorites/Favorites';
import FavCityDetails from '../../components/Favorites/FavCityDetails/FavCityDetails'
import { Route, Redirect } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="layout wa-theme">
      <NavbarComponent />
      <hr />
      <Route path="/home" component={HomePage} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/details" component={FavCityDetails} />
      <Redirect from="/" to="/home" />
    </div>
  );
};

export default Layout;
