import React from "react";
import "../../assets/css/homepage/LocateUs.css";
import map from "../../assets/images/map.png";
import roundedArrow from "../../assets/icons/rounded-arrow.png";

export function LocateUs() {
  return (
    <section className="mb-200 container grid-2" data-scroll-section>
      <div className="my-auto">
        <h3 className="section-title">
          Locate Us{" "}
          <span id="rounded-arrow">
            <img src={roundedArrow} alt="." />
          </span>
        </h3>
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
