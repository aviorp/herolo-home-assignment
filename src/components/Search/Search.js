import React, { Component } from 'react'
import "./Search.css";
import { connect } from "react-redux";
import { searchCity, selectCity } from '../../store/actions/actions';
import { Row } from 'react-bootstrap'
import Select from 'react-select'
export class Search extends Component {

  // Getting autocomplete options from api
  searchHandler(inputValue, reason) {
    this.props.searchCity(inputValue)
    this.props.selectCity(inputValue)
    if (reason.action === 'set-value') {
      if (inputValue.trim().length > 0) {
        console.log("SETVALUE")
      }
    }
  }

  // setValueHandler(inputValue, reason) {
  //   if (reason.action == "set-value") {
  //     console.log(inputValue)
  //   }
  // }

  render() {
    return (
      <Row className="wa-theme">
        <Select className="wa-search-bar" placeholder="Search" defaultOptions
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
