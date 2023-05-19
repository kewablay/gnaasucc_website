import React from "react";
import circle from "../../assets/icons/circle.png";
import '../../assets/css/utilities/CircledText.css'

function CircledText({text}) {
  return (
    <span id="circled-text">
      {text} <img src={circle} alt="" />
    </span>
  );
}

export default CircledText;
