import React, { Component } from 'react'
import "./Search.css";
import { connect } from "react-redux";
import { searchCity, selectCity } from '../../store/actions/actions';
import { Row } from 'react-bootstrap'
import Select from 'react-select'
export class Search extends Component {

  // Getting autocomplete options from api
  searchHandler(inputValue, reason) {
    if (reason.action === "input-change") {
      this.props.searchCity(inputValue)
    }
    //  else if (reason.action === "set-value") {
    //   console.log(inputValue)
    //   console.log(reason.action)
    // }
  }

  setCityWeather(value) {
    this.props.selectCity(value.value)
  }

  render() {
    return (
      <Row className="wa-theme">
        <Select className="wa-search-bar" placeholder="Search" defaultOptions
          onChange={(value) => this.setCityWeather(value)}
          onInputChange={(input, action) => this.searchHandler(input, action)} options={this.props.autoCompleteOptions}
        />
      </Row>
    )
  }
}



const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    autoCompleteOptions: state.cities.autoCompleteOptions
  };
};

export default connect(mapStateToProps, { searchCity, selectCity })(Search);
