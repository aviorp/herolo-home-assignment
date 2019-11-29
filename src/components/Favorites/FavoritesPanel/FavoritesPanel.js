import React from 'react';
import { connect } from 'react-redux';
import FavoritesCard from '../FavoritesCard/FavoritesCard'
import { Row } from 'react-bootstrap'
const FavoritesPanel = (props) => {

  if (!props.favorites || props.favorites.length === 0) {
    return <h1>OOPS, you out of Favorite cities..  </h1>
  } else {
    return (<div>
      <Row className="wa-row">
        {props.favorites.map(el => {
          return (<FavoritesCard name={el.name} cityKey={el.key} key={el.key} favWeather={props.weather} />)
        })}
      </Row>
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
