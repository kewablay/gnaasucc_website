import React from "react";
import "../../assets/css/layout/Header.css";
import bgVideo from "../../assets/bg.mp4";
import Poster from "../../assets/images/poster.png";

export function Header() {
  return (
    <header style={{ background: Poster }} className="flex-center mb-150">
      <div className="header-gradient"></div>
      <video autoPlay playsInline muted loop poster={Poster}>
        <source src={bgVideo} />
      </video>
      <h2 className="introText">
        WELCOME <span id="imj"></span> TO <span id="imj"></span> GNAAS UCC
      </h2>
    </header>
  );
}
