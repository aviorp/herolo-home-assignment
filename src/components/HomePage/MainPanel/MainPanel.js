import React from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleFavorite } from "../../../store/actions/actions";
import WeatherCard from '../WeatherCard/WeatherCard';
import "./MainPanel.css";


export const MainPanel = (props) => {
  const getFerToCel = (value) => {
    let celsius = ((value - 32) * 5) / 9;
    return celsius | 0
  }

  return (

    <Container fluid={true} className="wa-main-card wa-theme">
      <Row className="wa-row">
        <Col>
          <img src={"https://picsum.photos/150/150"} alt="City" />
        </Col>
        <Col className="wa-header-details">
          <h1>{props.name} </h1>
          <h4>{props.weather && getFerToCel(props.weather.DailyForecasts[0].Temperature.Maximum.Value) + "°C"}</h4>
          <br />
        </Col>
        <Col className="wa-right">
          <Button onClick={() => props.toggleFavorite(props.cityKey, props.name)}>
            Add To Favorite
          </Button>
          <br />
          <br />
          <Button onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
              alert(position.coords.latitude + " " + position.coords.longitude)
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
    cityKey: state.cities.city.key
  };
};
export default connect(mapStateToprops, { toggleFavorite })(MainPanel);
