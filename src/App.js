import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Favorites from "./components/Favorites/Favorites";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Layout />
      <Route path="/home" exact component={HomePage} />
      <Route path="/favorites" component={Favorites} />
      <Redirect from="/" to="/home" />
    </>
  );
}

export default App;
