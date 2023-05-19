import React, { useState } from "react";
import "../../assets/css/homepage/LocateUs.css";

import roundedArrow from "../../assets/icons/rounded-arrow.png";
import MapEmbed from "../utilities/MapEmbed";

export function LocateUs() {
  return (
    <section className="locate-us mb-200 container grid-2" data-scroll-section>
      <div className="content-grid my-auto">
        <h3 className="section-title">
          Locate Us
          <span id="rounded-arrow">
            <img src={roundedArrow} alt="." />
          </span>
        </h3>
        <p className="section-content">
          At central region, university of Cape Coast Amamoma. We've reserved a
          seat for you.
        </p>
      </div>

      <MapEmbed
        src={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7947.900156855872!2d-1.3016421651123047!3d5.111749000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfddf9303efaa577%3A0x26850f46221c8804!2sGNAAS%20Auditorium%2C%20UCC!5e0!3m2!1sen!2sus!4v1684461786115!5m2!1sen!2sus"
        }
      />
    </section>
  );
}
