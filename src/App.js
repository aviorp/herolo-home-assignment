import React from "react";
import Layout from "./hoc/Layout/Layout";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Favorites from "./components/Favorites/Favorites";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout />
      <Route path="/home" exact component={HomePage} />
      <Route path="/favorites" component={Favorites} />
      <Redirect from="/" to="/home" />
    </div>
  );
}

export default App;
