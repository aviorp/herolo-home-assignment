import React from "react";
import "./HomePage.css";
import MainCard from "../MainCard/MainCard";
import { connect } from "react-redux";
import { fetchWeather } from "../../store/actions/actions";
const HomePage = props => {
  // Get default city weather
  // props.fetchWeather("215854");

  navigator.geolocation.getCurrentPosition(function (position) {
    // save to consts lat, long
    // api call using lat and long
    // get city key, replace city key default as this one. if this one is empty make a fallback to Tel Aviv
    // console.log(position.coords.latitude, position.coords.longitude);
  });

  if (!props.weather) {
    props.fetchWeather("215854");
  }
  return (
    <div className="wa-homepage">
      <MainCard />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.weather.weather
  };
};

export default connect(mapStateToProps, { fetchWeather })(HomePage);
