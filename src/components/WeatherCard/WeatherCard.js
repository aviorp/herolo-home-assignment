import React from 'react';
import './WeatherCard.css'
import { Card, Button, Col } from 'react-bootstrap'
const WeatherCard = (props) => {
  const Days = ["Sun", "Mon", "Thu", "Wen", "Thu", "Fri", "Sat"]
  const getFerToCel = (value) => {
    let celuis = ((value - 32) * 5) / 9;
    return celuis | 0
  }
  return (
    <>
      <Col>
        <Card className="wa-card" >
          <Card.Body>
            <Card.Title>{props.day && props.day.city}</Card.Title>
            <Card.Text>
              {props.day && getFerToCel(props.day.Temperature.Maximum.Value) + "°C"}
            </Card.Text>
            <Card.Text>
              {props.day && Days[new Date(props.day.Date).getDay()]}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
};

export default WeatherCard;
