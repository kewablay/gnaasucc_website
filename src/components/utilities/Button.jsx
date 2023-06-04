import React from "react";
import "../../assets/css/utilities/Button.css";

function Button({link, text}) {
  return (
    <a href={link} className="btn" target="_blank">
      {text}
    </a>
  );
}

export default Button;
