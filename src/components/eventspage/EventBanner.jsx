import React from "react";
import "../../assets/css/eventspage/EventBanner.css";
import bannerImg2 from "../../assets/images/bannerImg2.png";
import bannerImg from "../../assets/images/bannerImg.png";

function EventBanner({ eventTitle }) {
  return (
    <div className="eventBanner flex-center mb-200 p-100">
      <img className="bannerImg2" src={bannerImg2} alt="" />
      <img className="bannerImg" src={bannerImg} alt="" />
      <div className="strip-mt">
        <p className="small-text text-center">The next big Event</p>
        <h3 className="section-title text-center">{eventTitle}</h3>
      </div>
    </div>
  );
}

export default EventBanner;
