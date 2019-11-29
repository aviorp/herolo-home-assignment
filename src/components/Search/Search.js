import React from 'react'
import "./Search.css";
import { connect } from "react-redux";
import { searchCity, selectCity } from '../../store/actions/actions';
import { Row } from 'react-bootstrap'
import Select from 'react-select'



const Search = (props) => {

  // Getting autocomplete options from api
  const searchHandler = (inputValue, reason) => {
    if (reason.action === "input-change") {
      props.searchCity(inputValue)
    }
  }
  const setCityWeather = (value) => {
    props.selectCity(value.value)
  }

  return (
    <Row className="wa-theme">
      <Select className="wa-search-bar" placeholder="Search" defaultOptions
        onChange={(value) => setCityWeather(value)}
        onInputChange={(input, action) => searchHandler(input, action)} options={props.autoCompleteOptions}
      />
    </Row>
  )

}

const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    autoCompleteOptions: state.cities.autoCompleteOptions
  };
};

export default connect(mapStateToProps, { searchCity, selectCity })(Search);
