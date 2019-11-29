import React from 'react';
import { connect } from 'react-redux';
import './Favorites.css';
import FavoritesCard from '../FavoritesCard/FavoritesCard';

const Favorites = (props) => {
  return (
    <div>
      <FavoritesCard />
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites
  }
}
export default connect(mapStateToProps, null)(Favorites);
