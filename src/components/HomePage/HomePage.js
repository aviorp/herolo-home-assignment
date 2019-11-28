import React from "react";
import "./HomePage.css";
import MainCard from "../MainCard/MainCard";
import { connect } from "react-redux";
import { fetchWeather } from "../../store/actions/actions";
const HomePage = props => {

  navigator.geolocation.getCurrentPosition(function (position) {
    // save to consts lat, long
    // api call using lat and long
    // get city key, replace city key default as this one. if this one is empty make a fallback to Tel Aviv
    // console.log(position.coords.latitude, position.coords.longitude);
  });
  let display;
  if (!props.weather) {
    display = <p>Loading...</p>
    props.fetchWeather(props.cityKey.key);
    return display
  } else {
    display =
      <div className="wa-homepage">
        <MainCard name={props.cityKey.name} weather={props.weather} />
      </div>
    return display

  }


};

const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    cityKey: state.cities.city
  };
};

export default connect(mapStateToProps, { fetchWeather })(HomePage);
