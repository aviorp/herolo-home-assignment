import React from 'react';
import './FavoritesCard.css';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchWeather } from '../../../store/actions/actions';
import { connect } from 'react-redux';

const FavoritesCard = (props) => {

  const getFerToCel = (value) => {
    let celsius = ((value - 32) * 5) / 9;
    return celsius | 0
  }

  return (
    <>
      <Col>
        <Card className="wa-card wa-theme" >
          <Card.Body>
            <Card.Title>{props.name && props.name}</Card.Title>
            <Card.Text>
              {props.favWeather && getFerToCel() + "°C"}
            </Card.Text>
            <Link to={"/home"} onClick={() => fetchWeather(props.key)}>
              <Button>See more Details</Button>
            </Link>

          </Card.Body>
        </Card>
      </Col>
    </>
  )
};


const mapStateToProps = (state) => {
  return {
    weather: state.weather.weather
  }
}

export default connect(mapStateToProps, { fetchWeather })(FavoritesCard);
