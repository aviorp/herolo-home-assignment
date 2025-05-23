import React from 'react'
import "./Search.css";
import { connect } from "react-redux";
import { searchCity, selectCity } from '../../store/actions/actions';
import Select from 'react-select'

const Search = (props) => {

  const searchHandler = (inputValue, reason) => {
    if (reason.action === "input-change") {
      props.searchCity(inputValue)
    }
  }
  const setCityWeather = (value) => {
    props.selectCity(value.value)
  }

  return (
    <Select className="wa-search-bar" placeholder="Search" defaultOptions
      onChange={(value) => setCityWeather(value)}
      onInputChange={(input, action) => /^[a-zA-Z\s]+$/.test(input) ? searchHandler(input, action) : input = ""} options={props.autoCompleteOptions}
    />
  )

}

const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    autoCompleteOptions: state.cities.autoCompleteOptions,
    geoCity: state.cities.geoCity
  };
};

export default connect(mapStateToProps, { searchCity, selectCity })(Search);
