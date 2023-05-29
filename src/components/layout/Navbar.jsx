import React, { useState } from "react";
import "../../assets/css/layout/Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const body = document.getElementsByTagName("body");
  console.log(body);

  return (
    <nav
      className={`container flex-between ${showMenu && "showMenu"}`}
      data-scroll-section
    >
      <div className="logo">GNAAS UCC</div>
      <div className="menu-backdrop">
        <div className={`navlinks `}>
          <p id="menu-title">Menu</p>
          <Link to={"/"}>Home</Link>
          <Link to={"/events"}>Events</Link>
          <Link to={"/gallery"}>Gallery</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/"}>Contact</Link>
          {/* <p id="copy-right">Gnaas UCC 2023</p> */}
        </div>
      </div>
      <button className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </nav>
  );
}
