import React from "react";
import '../../assets/css/utilities/Slider.css'
import arrow from "../../assets/icons/arrow.png";

function Slider({scrollBack, scrollForward, scrollBackRef, scrollForwardRef, sliderRef}) {
  return (
    <div className="slider" ref={sliderRef}>
      <button className="prev flex-center" onClick={scrollBack} ref={scrollBackRef}>
        <img src={arrow} alt="prev" />
      </button>
      <button className="next flex-center" onClick={scrollForward} ref={scrollForwardRef}>
        <img src={arrow} alt="next" />
      </button>
    </div>
  );
}

export default Slider;
