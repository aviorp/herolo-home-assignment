import React from "react";

const DaysCard = props => {
  return (
    <div>
      <h1>{props.day}</h1>
      <h3>{props.degs}</h3>
      <img src={props.img} />
    </div>
  );
};

export default DaysCard;
