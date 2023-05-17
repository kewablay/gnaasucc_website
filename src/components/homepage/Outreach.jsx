import React from "react";
import "../../assets/css/homepage/Outreach.css";
import hero3 from "../../assets/images/hero3.png";

export function Outreach() {
  return (
    <section className="outreach mb-200 container grid-2">
      <div className="content my-auto">
        <h3 className="section-title">
          Sharing God's word and spreading smiles.
        </h3>
        <p className="section-content">
          We organize outreach programs that involve visiting and supporting
          local orphanages and prisons.
        </p>
      </div>

      <div className="outreach-image">
        <img class="image-fluid" src={hero3} alt="outreach" />
      </div>
    </section>
  );
}
