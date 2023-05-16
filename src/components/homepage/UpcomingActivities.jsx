import React from "react";
import "../../assets/css/homepage/UpcomingActivities.css";
import praiseSabbath from "../../assets/images/praise-sabbath.jpg";
import traditionalSabbath from "../../assets/images/traditional-sabbath.jpeg";
import seraphimPraies from "../../assets/images/seraphim-praise.jpeg";

import Slider from "../utilities/Slider";

export function UpcomingActivities() {
  const upcoming = [
    {
      title: "Praise Sabbath",
      image: praiseSabbath,
      datePosted: "7th March 2023",
    },
    {
      title: "Traditional Sabbath",
      image: traditionalSabbath,
      datePosted: "2th March 2023",
    },
    {
      title: "Seraphim Praise",
      image: seraphimPraies,
      datePosted: "10th March 2023",
    },
  ];

  return (
    <section className="upcoming mb-200">
      <h3 className="text-650 section-title">Upcoming Events</h3>
      <div className="upcoming-container scroll-x hide-scrollbar mb-50">
        {upcoming.map((event) => (
          <div className="u-event">
            <div className="u-event__image">
              <img src={event.image} alt="eventImage" />
            </div>
            <div className="u-event__content">
              <p className="u-event__title">{event.title}</p>
              <small>{event.datePosted}</small>
            </div>
          </div>
        ))}
      </div>
      <Slider />
    </section>
  );
}
