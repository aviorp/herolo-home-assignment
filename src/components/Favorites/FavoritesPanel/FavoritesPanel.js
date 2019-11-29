import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../../store/actions/actions'
import FavoritesCard from '../FavoritesCard/FavoritesCard'
const FavoritesPanel = (props) => {

  if (!props.favorites || props.favorites.length === 0) {
    return <h1>OOPS, you out of Favorite cities..  </h1>
  } else {
    return (<div>
      <ul>
        {props.favorites.map(el => {
          props.fetchWeather(el.key)

          return (<FavoritesCard name={el.name} key={el.key} favWeather={props.weather} />)
        })}
      </ul>
    </div>)
  }
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
    weather: state.weather.weather
  }

}

export default connect(mapStateToProps, { fetchWeather })(FavoritesPanel);
