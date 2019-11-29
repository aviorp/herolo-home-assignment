import React from 'react'
import { connect } from 'react-redux'
import WeatherCard from '../WeatherCard/WeatherCard'
import './Favorites.css'
import { Row, Col, Container } from 'react-bootstrap'


const Favorites = (props) => {
  return (
    <Container fluid={true} className="wa-favorites wa-theme">
      <hr />
      <Row className="wa-cards-row">
        {/* 
        <Col>
          <Card className="wa-card wa-theme" >
            <Card.Body>
              <Card.Title>{props.day && getFerToCel(props.day.Temperature.Maximum.Value) + "°C"}</Card.Title>
              <Card.Text>
                {props.day && Days[new Date(props.day.Date).getDay()]}
              </Card.Text>
              <h5> {props.day && props.day.Day.IconPhrase}</h5>


            </Card.Body>
          </Card>
        </Col> */}

      </Row>
    </Container>

  )
}



const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites
  }
}
export default connect(mapStateToProps, null)(Favorites);
