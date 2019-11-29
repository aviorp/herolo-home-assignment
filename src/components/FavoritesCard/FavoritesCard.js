import React from 'react';
import { connect } from 'react-redux';
const FavoritesCard = (props) => {

  if (!props.favorites) {
    return <h1>OOPS, you out of Favorite cities..  </h1>
  } else {
    return (<div>
      {console.log(props.favorites)}
    </div>)
  }


};

const mapStateToProps = (state) => {

  return {
    favorites: state.favorites
  }

}

export default connect(mapStateToProps, null)(FavoritesCard);
