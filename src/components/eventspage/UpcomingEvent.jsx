import React from "react";
import "../../assets/css/eventspage/UpcomingEvent.css";
import EventBanner from "./eventBanner";

function UpcomingEvent() {
  return (
    <div data-scroll-section>
      <div className="upcomingEvent container mb-100 content-grid strip-mt">
        <h3 className="section-title">Upcoming Events</h3>
        <p className="section-content">
          Experience the excitement of live events with us. Tune in on Facebook
          and enjoy wonderful moments with us.
        </p>
      </div>

      <EventBanner eventTitle={"Traditional Sabbath"} />
    </div>
  );
}

export default UpcomingEvent;
