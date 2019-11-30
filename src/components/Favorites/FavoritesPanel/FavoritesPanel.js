import React from 'react';
import { connect } from 'react-redux';
import FavoritesCard from '../FavoritesCard/FavoritesCard';
import { Container } from 'react-bootstrap';
import './FavoritesPanel.css'
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
        {props.favorites.map(el => {
          return (<FavoritesCard name={el.name} cityKey={el.key} key={el.key} favWeather={props.weather} />)
        })}
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
