import React from 'react';
import { connect } from 'react-redux';
const FavoritesCard = (props) => {

  if (!props.favorites || props.favorites === []) {
    return <h1>OOPS, you out of Favorite cities..  </h1>
  } else {
    return (console.log(props.favorites))
  }


};

const mapStateToProps = (state) => {

  return {
    favorties: state.favorties
  }

}

export default connect(mapStateToProps, null)(FavoritesCard);
