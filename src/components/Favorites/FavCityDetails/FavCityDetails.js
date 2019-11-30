import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleFavorite } from "../../../store/actions/actions";
import WeatherCard from '../../HomePage/WeatherCard/WeatherCard';
import { Link } from 'react-router-dom'
import MainIcon from '../../MainIcon/MainIcon';
import "./FavCityDetails.css";

export const FavCityDetails = (props) => {
  const getFerToCel = (value) => {
    let celsius = ((value - 32) * 5) / 9;
    return celsius | 0
  }
  return (
    <>
      <header>
        <h1>Weather Details</h1>
      </header>
      <br />
      < Container fluid={true} className="wa-main-card wa-theme" >
        <Row className="wa-row">
          <Col >
            <MainIcon iconPhrase={props.weather && props.weather.DailyForecasts[0].Day.IconPhrase} />
          </Col>
          <Col className="wa-header-details">
            <h1>{props.cityName.name}</h1>
            <h4>{props.weather && getFerToCel(props.weather.DailyForecasts[0].Temperature.Maximum.Value) + "°C"}</h4>
          </Col>
          <Col className="wa-right" >
            <Link to="/home">
              <Button>Back To Home</Button>
            </Link>
            <br />
          </Col>
        </Row>
        <hr />
        <Row >
          <Col>
            <h3>{props.weather && props.weather.Headline.Text}</h3>
          </Col>
        </Row>
        <hr />
        <Row className="wa-cards-row">
          {props.weather && props.weather.DailyForecasts.map((day, index) =>
            <Col>
              <WeatherCard key={"index: " + index++} day={day} />
            </Col>)
          }
        </Row>
      </Container >
    </>
  )
}

const mapStateToprops = state => {
  return {
    weather: state.weather.weather,
    name: state.cities.city.name,
    cityName: state.weather.favCity

  };
};
export default connect(mapStateToprops, { toggleFavorite })(FavCityDetails);
