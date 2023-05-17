import React from "react";
import "../../assets/css/homepage/LocateUs.css";
import map from "../../assets/images/map.png";

export function LocateUs() {
  return (
    <section className="mb-200 container grid-2">
      <div className="my-auto">
        <h3 className="section-title">Locate Us</h3>
        <p className="section-content">
          At central region, university of Cape Coast Amamoma. We've reserved a
          seat for you.
        </p>
      </div>

      <div className="map img-div">
        <img src={map} alt="map" className="image-fluid" />
      </div>
    </section>
  );
}
