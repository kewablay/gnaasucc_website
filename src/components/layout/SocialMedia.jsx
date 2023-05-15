import React from "react";
import "../../assets/css/layout/SocialMedia.css";
import socialMedia from "../../assets/images/social-media.png";
import SocialLinks from "../utilities/SocialLinks";

export function SocialMedia({ bgColor }) {
  return (
    <section
      className="social-media mb-200 pt-100 "
      style={{ background: bgColor }}
    >
      <div className="content-wrapper grid-2 container">
        <h3 className="section-title text-center">
          Follow us on social media for more updates
        </h3>
        <SocialLinks />
      </div>

      <div className="section-image">
        <img src={socialMedia} alt="socialMedia" />
      </div>
    </section>
  );
}
