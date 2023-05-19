import React, { useState } from "react";
import "../../assets/css/layout/Navbar.css";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const body = document.getElementsByTagName("body");
  console.log(body);

  const handleMenu = () => {
    document.querySelector(".body").classList.toggle("disable-scroll");
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`container flex-between ${showMenu && "showMenu"}`}
      data-scroll-section
    >
      <div className="logo">GNAAS UCC</div>
      <div className="menu-backdrop">
        <div className={`navlinks `}>
          <p id="menu-title">Menu</p>
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          {/* <p id="copy-right">Gnaas UCC 2023</p> */}
        </div>
      </div>
      <button className="menu-icon" onClick={handleMenu}>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </nav>
  );
}
