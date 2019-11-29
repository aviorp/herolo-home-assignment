import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleFavorite } from "../../../store/actions/actions";
import WeatherCard from '../../HomePage/WeatherCard/WeatherCard';
import { Link } from 'react-router-dom'
import "./FavCityDetails.css";

export const FavCityDetails = (props) => {


  return (
    < Container fluid={true} className="wa-main-card wa-theme" >
      <Row className="wa-row">
        <Col md={1}>
          <img src={"https://picsum.photos/150/150"} alt="City" />
        </Col>
        <Col md={3} className="wa-header-details">
          <h1>{props.cityName.name}</h1>
          <br />
        </Col>
        <Col className="wa-right" md={2}>
          <Link to="/home">
            <Button>Back To Home</Button>
          </Link>
          <br />
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
          </Col>)
        }
      </Row>
    </Container >

  )
}

const mapStateToprops = state => {
  return {
    weather: state.weather.weather,
    name: state.cities.city.name,
    cityName: state.weather.favCityName

  };
};
export default connect(mapStateToprops, { toggleFavorite })(FavCityDetails);
