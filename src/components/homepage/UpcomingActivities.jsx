import React from "react";
import "../../assets/css/homepage/UpcomingActivities.css";
import praiseSabbath from "../../assets/images/praise-sabbath.jpg";
import Slider from "../utilities/Slider";

export function UpcomingActivities() {
  return (
    <section className="upcoming mb-200">
      <h3 className="text-650 section-title">Upcoming Events</h3>
      <div className="upcoming-container scroll-x hide-scrollbar mb-50">
        <div className="u-event">
          <div className="u-event__image">
            <img src={praiseSabbath} alt="eventImage" />
          </div>
          <div className="u-event__content">
            <p className="u-event__title">Praise Sabbath 23</p>
            <small>7th August 2023</small>
          </div>
        </div>
        {/* --- */}
        <div className="u-event">
          <div className="u-event__image">
            <img src={praiseSabbath} alt="eventImage" />
          </div>
          <div className="u-event__content">
            <p className="u-event__title">Praise Sabbath 23</p>
            <small>7th August 2023</small>
          </div>
        </div>
        {/* --- */}
        <div className="u-event">
          <div className="u-event__image">
            <img src={praiseSabbath} alt="eventImage" />
          </div>
          <div className="u-event__content">
            <p className="u-event__title">Praise Sabbath 23</p>
            <small>7th August 2023</small>
          </div>
        </div>
        {/* --- */}
      </div>
      <Slider />
    </section>
  );
}
