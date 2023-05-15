import React from "react";
import "../../assets/css/homepage/LocateUs.css";

export function LocateUs() {
  return (
    <section className="mb-200 container grid-2">
      <div>
        <h3 className="section-title">Locate Us</h3>
        <p className="section-content">
          At central region, university of Cape Coast Amamoma. We've reserved a
          seat for you.
        </p>
      </div>

      <div className="map"></div>
    </section>
  );
}
