import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherCard from '../WeatherCard/WeatherCard'
import './Favorites.css'
import { Row, Container } from 'react-bootstrap'
export class Favorites extends Component {
  render() {
    return (
      <div className="wa-favorites">
        {/* {console.log(this.props.favorites)} */}
        <Container>
          <Row>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
          </Row>
        </Container>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites
  }
}
export default connect(mapStateToProps, null)(Favorites);
