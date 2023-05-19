import React from "react";
import "../../assets/css/homepage/Events.css";
import eventHero from "../../assets/images/hero2.png";

export function Events() {
  return (
    <section className="py-100 bg-primary mb-200 p-100" data-scroll-section>
      <div className="content-wrapper grid-2 container">
        <div className="e-content my-auto">
          <h3 className="section-title">
            We organize yearly Events you can't afford to miss
          </h3>
          <p className="section-content">
            From musical concerts to conferences, we've always got the best and
            exciting lineup of events to suit your taste!
          </p>
        </div>
        <div className="e-Image">
          {/* <video autoPlay playsInline muted loop >
            <source src={eventImage} />
          </video> */}
          <img className="image-fluid" src={eventHero} alt="events" />
        </div>
      </div>
    </section>
  );
}
