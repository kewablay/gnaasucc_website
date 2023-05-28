import React from "react";
import "../../assets/css/layout/Header.css";
import bgVideo from "../../assets/bg.mp4";
import Poster from "../../assets/images/poster.png";
import vector1 from "../../assets/icons/vector1-emoji.png";
import vector2 from "../../assets/icons/vector2-church.png";

export function Header({ isMainheader, bgImage, page }) {
  return (
    <>
      {isMainheader ? (
        <header
          style={{ background: Poster }}
          className="flex-center mb-150"
          data-scroll-section
        >
          <div className="header-gradient"></div>
          <video autoPlay playsInline muted loop poster={Poster}>
            <source src={bgVideo} />
          </video>
          <h2 className="introText">
            WELCOME
            <span id="imj">
              <img src={vector1} alt="" />
            </span>
            TO
            <span id="imj">
              <img src={vector2} alt="" />
            </span>
            GNAAS UCC
          </h2>
        </header>
      ) : (
        <header
          style={{ background: bgImage }}
          className="flex-center mb-150"
          data-scroll-section
        >
          <div className="header-gradient"></div>
          <img src={bgImage} alt={bgImage} className="header-img" />
          <h2 className="introText">{page}</h2>
        </header>
      )}
    </>
  );
}
