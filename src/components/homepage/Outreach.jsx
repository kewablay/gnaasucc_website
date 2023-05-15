import React from "react";
import "../../assets/css/homepage/Outreach.css";
import outreach from '../../assets/eventHero.gif'

export function Outreach() {
  return (
    <section className="mb-200 container grid-2">
      <div className="content">
        <h3 className="section-title">Sharing God's word and spreading smiles.</h3>
        <p className="section-content">
          We organize outreach programs that involve visiting and supporting
          local orphanages and prisons.
        </p>
      </div>

      <div className="section-image">
        <img src={outreach} alt="" />
      </div>
    </section>
  );
}
