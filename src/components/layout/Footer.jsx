import React from "react";
import "../../assets/css/layout/Footer.css";
import SocialLinks from "../utilities/SocialLinks";

export function Footer() {
  return (
    <footer className="footer py-100 bg-dark">
      <div className="content-wrapper container">
        <div className="logo  mb-100">
          <h3 className="text-660">GNAAS UCC </h3>
        </div>

        <div class="flex-col gap-1 mb-100">
          <p>Social Media</p>
          <SocialLinks />
        </div>

        <div class="flex-col gap-1 mb-100">
          <a href="#">Gallery</a>
          <a href="#">Events</a>
          <a href="#">Departments</a>
        </div>

        <div class="flex-col gap-1 mb-100">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Call Us Now</a>
        </div>
      </div>
    </footer>
  );
}
