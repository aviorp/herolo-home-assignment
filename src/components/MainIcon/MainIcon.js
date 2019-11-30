import React from 'react';
import Sun from '../../assets/sunny.png'
import Cloud from '../../assets/cloud.png';
import Rain from '../../assets/rain.png';
import Storm from '../../assets/storm.png';


const MainIcon = (props) => {

  if (!props.iconPhrase) {
    return <p>Loading Picture...</p>
  }

  if (props.iconPhrase.toLowerCase().includes("sun")) {
    return <img className="wa-main-pic" src={Sun} alt="Icon"></img>

  }
  if (props.iconPhrase.toLowerCase().includes("cloud")) {
    return <img className="wa-main-pic" src={Cloud} alt="Icon"></img>
  }
  if (props.iconPhrase.toLowerCase().includes("rain") || props.iconPhrase.toLowerCase().includes("showers")) {
    return <img className="wa-main-pic" src={Rain} alt="Icon"></img>
  }
  if (props.iconPhrase.toLowerCase().includes("storm") || props.iconPhrase.toLowerCase().includes("thunder")) {
    return <img className="wa-main-pic" src={Storm} alt="Icon"></img>
  }
};

export default MainIcon;
