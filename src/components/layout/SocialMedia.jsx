import React from "react";
import "../../assets/css/layout/SocialMedia.css";
import mockup1 from "../../assets/images/mockup1.png";
import mockup2 from "../../assets/images/mockup2.png";
import SocialLinks from "../utilities/SocialLinks";
import CircledText from "../utilities/CircledText";

export function SocialMedia({ bgColor }) {
  return (
    <section
      className="social-media mb-200 pt-100 "
      style={{ background: bgColor }}
    >
      <div className="content-wrapper container">
        <h3 className="section-title text-center">
           Follow us on social media for more <CircledText text={"updates"} />
        </h3>
        <SocialLinks />
      </div>

      <div className="section-image">
        <img src={mockup1} alt="socialMedia" />
        <img src={mockup2} alt="socialMedia" />
      </div>
    </section>
  );
}
