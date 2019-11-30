import React from 'react';
import { connect } from 'react-redux';
import FavoritesCard from '../FavoritesCard/FavoritesCard';
import { Container, Row, Col } from 'react-bootstrap';
import './FavoritesPanel.css';

const FavoritesPanel = (props) => {

  if (!props.favorites || props.favorites.length === 0) {
    return (<div>
      <h2>OOPS, you out of Favorite cities..  </h2>
      <br />
      <img src={"https://www.wunderground.com/data/wximagenew/b/bpwh/264.gif"} alt="Pic" />
    </div>)

  } else {
    return (<div>
      <Container fluid={true} className="wa-main-card">
        <Row>
          {props.favorites.map(el => {
            return (<Col key={el.key}><FavoritesCard name={el.name} cityKey={el.key} favWeather={props.weather} /></Col>)
          })}
        </Row>
      </Container>
    </div >)
  }
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
    weather: state.weather.weather
  }

}

export default connect(mapStateToProps, null)(FavoritesPanel);
