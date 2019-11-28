import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherCard from '../WeatherCard/WeatherCard'
import './Favorites.css'
import { Row, Col, Container } from 'react-bootstrap'
export class Favorites extends Component {
  render() {
    return (

      <Container fluid={true} className="wa-favorites wa-theme">
        <hr />
        <Row className="wa-cards-row">
          <Col md={2}>
            <WeatherCard />
          </Col>
          <Col md={2}>
            <WeatherCard />
          </Col>
          <Col md={2}>
            <WeatherCard />
          </Col>
          <Col md={2}>
            <WeatherCard />
          </Col>
          <Col md={2}>
            <WeatherCard />
          </Col>
          <Col md={2}>
            <WeatherCard />
          </Col>
          <Col md={2}>
            <WeatherCard />
          </Col>


        </Row>
      </Container>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites
  }
}
export default connect(mapStateToProps, null)(Favorites);
