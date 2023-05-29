import React from "react";
import "../../assets/css/eventspage/AllEvents.css";
import ItemCard from "../utilities/ItemCard";

function AllEvents() {
  return (
    <div className="allEvents container mb-200" data-scroll-section>
      <p className="subtitle">All Events</p>

      <div className="allEvents grid-2">
        <ItemCard title={"Traditional Sabbath"} />
        <ItemCard title={"Music Fest"} />
        <ItemCard title={"House of Praise"} />
        <ItemCard title={"Seraphim Praise"} />
      </div>
    </div>
  );
}

export default AllEvents;
