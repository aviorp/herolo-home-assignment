import React, { useEffect } from "react";
import "./HomePage.css";
import { connect } from "react-redux";
import { fetchWeather } from "../../store/actions/actions";
import MainPanel from "./MainPanel/MainPanel";
import Search from '../Search/Search';
const HomePage = props => {
  useEffect(() => {
    props.fetchWeather(props.cityKey.key);
    // eslint-disable-next-line
  }, [props.cityKey.key])




  // save to consts lat, long
  // api call using lat and long
  // get city key, replace city key default as this one. if this one is empty make a fallback to Tel Aviv

  if (props.geoCity.key) {
    props.fetchWeather(props.geoCity.key)
  }
  if (!props.weather) {
    return (<div className="wa-homepage"><h2>loading ... </h2></div>)
  } else {
    return (
      <div className="wa-homepage">
        <Search />
        <MainPanel name={props.geoCity.name ? props.geoCity.name : props.cityKey.name} weather={props.weather} />
      </div>)
  }
};

const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    cityKey: state.cities.city,
    geoCity: state.cities.geoCity
  };
};

export default connect(mapStateToProps, { fetchWeather })(HomePage);
