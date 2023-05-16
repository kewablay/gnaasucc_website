import React from "react";
import "../../assets/css/utilities/Button.css";

function Button(link) {
  return (
    <a href={link} className="btn">
      Connect
    </a>
  );
}

export default Button;
