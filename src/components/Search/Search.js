import React, { Component } from 'react'
import "./Search.css";
import { connect } from "react-redux";
import { searchCity } from '../../store/actions/actions'
export class Search extends Component {
  searchHandler(e) {
    let inputValue = e.target.value.toLowerCase()
    this.props.searchCity(inputValue)
    let cities = this.props.cities
    let parsedArray = cities.filter(el => el.LocalizedName.toLowerCase().startsWith(inputValue));
    // autocomplete == npm package

  }
  render() {
    return (

      <form>
        <input
          type="text"
          placeholder="Search"
          onKeyUp={(e) => this.searchHandler(e)}
        />
        {console.log(this.props.cities)}
      </form>


    )
  }
}



const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    cities: state.cities.cities
  };
};

export default connect(mapStateToProps, { searchCity })(Search);
