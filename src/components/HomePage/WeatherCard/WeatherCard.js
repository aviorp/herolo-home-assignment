import React from 'react';
import './WeatherCard.css'
import { Card } from 'react-bootstrap'
import Sun from '../../../assets/sunny.png'
import Cloud from '../../../assets/cloud.png'
import Rain from '../../../assets/rain.png'
import Storm from '../../../assets/storm.png'

const WeatherCard = (props) => {
  const Days = ["Sun", "Mon", "Thu", "Wen", "Thu", "Fri", "Sat"]
  const getFerToCel = (value) => {
    let celsius = ((value - 32) * 5) / 9;
    return celsius | 0
  }

  let iconPhrase = props.day.Day.IconPhrase;
  let icon;
  if (iconPhrase.toLowerCase().includes("sun")) {
    icon = <img src={Sun} alt="Icon"></img>

  }
  if (iconPhrase.toLowerCase().includes("cloud")) {
    icon = <img src={Cloud} alt="Icon"></img>
  }
  if (iconPhrase.toLowerCase().includes("rain") || iconPhrase.toLowerCase().includes("showers")) {
    icon = <img src={Rain} alt="Icon"></img>
  }
  if (iconPhrase.toLowerCase().includes("storm") || iconPhrase.toLowerCase().includes("thunder")) {
    icon = <img src={Storm} alt="Icon"></img>
  }


  return (
    <Card className="wa-theme wa-body" >
      <Card.Body>
        <Card.Title> {props.day && Days[new Date(props.day.Date).getDay()]} &nbsp; <span>{props.day && getFerToCel(props.day.Temperature.Maximum.Value) + "°C"}</span></Card.Title>
        <Card.Title>
          {props.day && props.day.Day.IconPhrase}
          <br />
          {icon}
        </Card.Title>
      </Card.Body>
    </Card>
  )
};

export default WeatherCard;
