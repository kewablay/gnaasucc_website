import React from "react";
import "../../assets/css/homepage/SupportUs.css";
import mobile from "../../assets/icons/mobile.png";
import bank from "../../assets/icons/bank.png";

export function SupportUs() {
  return (
    <section className="bg-secondary mb-200 py-100">
      <div className="content-wrapper container">
        <div className="content-grid">
          <h3 className="section-title">
            Support our efforts with a charitable donation.
          </h3>
          <p className="section-content">
            Help us spread God's love by donating. Your support makes a
            meaningful difference in our ministry.
          </p>
        </div>

        <div className="donation-cards grid-2">
          <div className="card">
            <div className="cardImage">
              <img src={mobile} alt="mobile money" />
            </div>
            <h3 className="section-title">Mobile Money</h3>
            <p>0554378923</p>
            {/* <p>Reference</p>
            <p>GNAAS UCC PROJECTS</p> */}
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={bank} alt="bank" />
            </div>
            <h3 className="section-title">Bank transfer</h3>
            <p>3021010021258 (GCB BANK PLC )</p>
            {/* <p>Reference</p>
            <p>GHANA NATIONAL ASSOCIATION OF ADVENTIST STUDENTS UCC</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
