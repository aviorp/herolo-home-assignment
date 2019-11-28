import React from 'react';
import './WeatherCard.css'
import { Card, Col } from 'react-bootstrap'
const WeatherCard = (props) => {
  const Days = ["Sun", "Mon", "Thu", "Wen", "Thu", "Fri", "Sat"]
  const getFerToCel = (value) => {
    let celuis = ((value - 32) * 5) / 9;
    return celuis | 0
  }
  return (
    <>
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
      </Col>
    </>
  )
};

export default WeatherCard;
