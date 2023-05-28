import React from "react";
import "../../assets/css/eventspage/UpcomingEvent.css";
import EventBanner from "./eventBanner";
import GridColTwo from "../utilities/GridColTwo";

function UpcomingEvent() {
  return (
    <div className="container" data-scroll-section>
      <GridColTwo
        title={"Upcoming Events"}
        content={
          "Experience the excitement of live events with us. Tune in on Facebook and enjoy wonderful moments with us."
        }
      />

      <EventBanner eventTitle={"Traditional Sabbath"} />
    </div>
  );
}

export default UpcomingEvent;
