import React from "react";

import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import telegram from "../../assets/icons/telegram.png";

function SocialLinks() {
  return (
    <div className="social-icons">
      <a href="#">
        <img src={facebook} alt="facebook" className="social-icon" />
      </a>
      <a href="#">
        <img src={instagram} alt="instagram" className="social-icon" />
      </a>
      <a href="#">
        <img src={telegram} alt="Telegram" className="social-icon" />
      </a>
    </div>
  );
}

export default SocialLinks;
