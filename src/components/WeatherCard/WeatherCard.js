import React from 'react';
import './WeatherCard.css'
import { Card, Button, Col } from 'react-bootstrap'
const WeatherCard = () => {
  return (
    <>
      <Col>
        <Card className="wa-card" >
          <Card.Body>
            <Card.Title>props.city</Card.Title>
            <Card.Text>
              props.deg
    </Card.Text>
            props.Weather
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
};

export default WeatherCard;
