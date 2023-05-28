import React from "react";
import "../../assets/css/eventspage/EventCard.css";

function EventCard({eventTItle}) {
  return <div className="eventCard">
    <div className="eventCard-image"></div>
    <div className="eventCard-content">
        <h4 className="card-title">{eventTItle}</h4>
        <p className="small-text">7th May, 2023</p>
    </div>
  </div>;
}

export default EventCard;
