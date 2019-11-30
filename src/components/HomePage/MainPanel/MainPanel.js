import React from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleFavorite, getGeoPosition } from "../../../store/actions/actions";
import WeatherCard from '../WeatherCard/WeatherCard';
import "./MainPanel.css";
import MainIcon from '../../MainIcon/MainIcon';


export const MainPanel = (props) => {

  const getFerToCel = (value) => {
    let celsius = ((value - 32) * 5) / 9;
    return celsius | 0
  }
  // eslint-disable-next-line
  const isFavorite = props.favorites.favorites && props.favorites.favorites.find(city => city.key == props.cityKey);

  return (

    <Container fluid={true} className="wa-main-card wa-theme">
      <Row className="wa-row">
        <Col>
          <MainIcon iconPhrase={props.weather.DailyForecasts[0].Day.IconPhrase} />
        </Col>
        <Col className="wa-header-details">
          <h1>{props.name} </h1>
          <h4>{props.weather && getFerToCel(props.weather.DailyForecasts[0].Temperature.Maximum.Value) + "°C"}</h4>
          <br />
        </Col>
        <Col className="wa-right">
          <div className="wa-icon">
            <i className={`fa ${isFavorite ? "fa-star" : "fa-star-o"} fa-10x`} style={{ color: isFavorite && "#ffd800" }} onClick={() => props.toggleFavorite(props.cityKey, props.name)}></i>
          </div>
          <br />
          <br />
          <Button onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
              props.getGeoPosition(position.coords.latitude, position.coords.longitude)
            })
          }}>
            Get my location
          </Button>
        </Col>
      </Row>
      <hr />
      <Row className="wa-row">
        <Col>
          <h3>{props.weather && props.weather.Headline.Text}</h3>
        </Col>
      </Row>
      <hr />
      <Row className="wa-weather-row">
        {props.weather && props.weather.DailyForecasts.map((day, index = 0) =>
          <Col key={"index: " + index++}>
            <WeatherCard day={day} />
          </Col>)
        }
      </Row>
    </Container>

  )
}

const mapStateToprops = state => {
  return {
    weather: state.weather.weather,
    name: state.cities.city.name,
    cityKey: state.cities.city.key,
    favorites: state.favorites
  };
};
export default connect(mapStateToprops, { toggleFavorite, getGeoPosition })(MainPanel);
