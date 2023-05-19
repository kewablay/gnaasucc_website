import React from "react";
import "../../assets/css/utilities/Button.css";

function Button({link}) {
  return (
    <a href={link} className="btn" target="_blank">
      Connect
    </a>
  );
}

export default Button;
