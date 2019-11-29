import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchWeather } from "../../store/actions/actions";
import WeatherCard from '../WeatherCard/WeatherCard'
import "./MainPanel.css";

export const MainCard = (props) => {
  return (
    <Container fluid={true} className="wa-main-card wa-theme">
      <Row className="wa-row">
        <Col md={1}>
          <img src={"https://picsum.photos/150/150"} alt="City" />
        </Col>
        <Col md={3} className="wa-header-details">
          <h1>{props.name}</h1>
          <br />
        </Col>
        <Col className="wa-right" md={2}>
          <Button >
            Add To Favorite
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
      <Row className="wa-cards-row">
        {props.weather && props.weather.DailyForecasts.map(day =>
          <Col md={2}>
            <WeatherCard day={day} />
          </Col>

        )
        }
      </Row>
    </Container>

  )
}

const mapStateToprops = state => {
  return {
    weather: state.weather.weather,
    name: state.cities.city.name
  };
};
export default connect(mapStateToprops, { fetchWeather })(MainCard);
