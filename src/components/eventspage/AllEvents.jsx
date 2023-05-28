import React from "react";
import "../../assets/css/eventspage/AllEvents.css";
import EventCard from "./EventCard";

function AllEvents() {
  return (
    <div className="allEvents container mb-200" data-scroll-section>
      <p className="subtitle">All Events</p>

      <div className="allEvents grid-2">
        <EventCard eventTItle={"Traditional Sabbath"} />
        <EventCard eventTItle={"Music Fest"} />
        <EventCard eventTItle={"House of Praise"} />
        <EventCard eventTItle={"Seraphim Praise"} />
      </div>
    </div>
  );
}

export default AllEvents;
