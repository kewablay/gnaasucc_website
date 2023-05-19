import React from "react";
import "../../assets/css/utilities/SocialLinks.css";

import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import telegram from "../../assets/icons/telegram.png";

function SocialLinks() {
  return (
    <div className="social-icons">
      <a
        href="https://web.facebook.com/gnaasuccpage/?_rdc=1&_rdr"
        target="_blank"
      >
        <img src={facebook} alt="facebook" className="social-icon" />
      </a>
      <a href="https://www.instagram.com/gnaas_ucc/?hl=en" target="_blank">
        <img src={instagram} alt="instagram" className="social-icon" />
      </a>
      <a href="#">
        <img
          src={telegram}
          alt="Telegram"
          className="social-icon"
          target="_blank"
        />
      </a>
    </div>
  );
}

export default SocialLinks;
