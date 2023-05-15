import React from "react";
import '../../assets/css/utilities/Slider.css'
import arrow from "../../assets/icons/arrow.png";

function Slider() {
  return (
    <div className="slider">
      <button className="prev flex-center">
        <img src={arrow} alt="prev" />
      </button>
      <button className="next flex-center">
        <img src={arrow} alt="next" />
      </button>
    </div>
  );
}

export default Slider;
