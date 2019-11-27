import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchWeather } from "../../store/actions/actions";
import WeatherCard from '../WeatherCard/WeatherCard'
import "./MainCard.css";
export class MainCard extends Component {
  render() {
    // if (!this.props.weather.selectedWeather || undefined) {
    //   return (
    //     <div>
    //       <Container fluid={true} className="wa-main-card">
    //         <Row className="wa-row">
    //           <h1>Search about the Weather  of your city Above</h1>
    //         </Row>
    //         <hr />

    //       </Container>
    //     </div >)
    // }
    // else if (this.props.weather.selectedWeather === undefined) {
    //   return (
    //     <div>
    //       <Container fluid={true} className="wa-main-card">
    //         <Row className="wa-row">
    //           <h1>Search about the Weather  of your city Above</h1>
    //         </Row>
    //         <hr />
    //       </Container>
    //     </div >)
    // }
    // else {
    //   // console.log(this.props.weather.selecaedWeather)
    return (
      <Container fluid={true} className="wa-main-card">
        <Row className="wa-row">
          <Col md={1}>
            <img src={"https://picsum.photos/150/150"} alt="City" />
            <h3>props.img</h3>
          </Col>
          <Col md={2} className="wa-header-details">
            <h4>props.city</h4>
            <br />
            <p>props.deg</p>
          </Col>
          <Col className="wa-right" md={2}>
            <Button >
            </Button>
          </Col>
        </Row>
        <hr />
        <Row className="wa-row">
          <Col>
            <h1>Very Interesting Content...</h1>
            <h3>props.weatherStatus</h3>
          </Col>
        </Row>
        <hr />
        <Row className="wa-cards">
          {this.props.weather && this.props.weather.DailyForecasts.map(day =>
            <Col md={2}>
              <WeatherCard day={day} />
            </Col>
          )
          }
        </Row>
      </Container>
    )
  }

  // }
}
const mapStateToprops = state => {
  return {
    weather: state.weather.weather
  };
};
export default connect(mapStateToprops, { fetchWeather })(MainCard);
