import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reducer from "./store/reducers";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from 'redux-logger'
import '../node_modules/font-awesome/css/font-awesome.min.css';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
document.title = "Weather App"
ReactDOM.render(app, document.getElementById("root"));
