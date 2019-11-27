import React, { Component } from 'react'
import "./Search.css";
import { connect } from "react-redux";
import { searchCity } from '../../store/actions/actions';
import Select from 'react-select'
export class Search extends Component {

  // Getting autocomplete options from api
  searchHandler(inputValue) {
    this.props.searchCity(inputValue)
  }

  render() {
    return (
      <Select placeholder="Search"
        onInputChange={(input) => this.searchHandler(input)}
        options={this.props.autoCompleteOptions} />
    )
  }
}



const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    autoCompleteOptions: state.cities.autoCompleteOptions
  };
};

export default connect(mapStateToProps, { searchCity })(Search);
