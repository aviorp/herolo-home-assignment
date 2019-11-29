import React, { useEffect } from "react";
import "./HomePage.css";
import { connect } from "react-redux";
import { fetchWeather } from "../../store/actions/actions";
import MainPanel from "../MainPanel/MainPanel";


const HomePage = props => {

  // Get city weather
  useEffect(() => {
    props.fetchWeather(props.cityKey.key);
  }, [])

  navigator.geolocation.getCurrentPosition(function (position) {
    // save to consts lat, long
    // api call using lat and long
    // get city key, replace city key default as this one. if this one is empty make a fallback to Tel Aviv
    // console.log(position.coords.latitude, position.coords.longitude);
  });

  // Check if there is any weather to display
  if (!props.weather) {
    return (<p>Loading...</p>)
  } else {
    return (
      <div className="wa-homepage">
        <MainPanel name={props.cityKey.name} weather={props.weather} />
      </div>)
  }
};

const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    cityKey: state.cities.city
  };
};

export default connect(mapStateToProps, { fetchWeather })(HomePage);
