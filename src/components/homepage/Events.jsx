import React from "react";
import "../../assets/css/homepage/Events.css";
import eventImage from "../../assets/eventHero.webm";
import eventGif from "../../assets/eventHero.gif";

export function Events() {
  return (
    <section className="mb-200 py-100 bg-primary">
      <div className="content-wrapper grid-2 container">
        <div className="e-content">
          <h3 className="text-650">Yearly Events</h3>
          <p className="text-600">
            From musical concerts to conferences, we've got you covered with an
            exciting lineup of events to suit your taste!
          </p>
        </div>
        <div className="e-Image">
          {/* <video autoPlay playsInline muted loop >
            <source src={eventImage} />
          </video> */}
          <img src={eventGif} alt="" />
        </div>
      </div>
    </section>
  );
}
