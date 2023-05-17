import React from "react";
import "../../assets/css/homepage/Developers.css";
import Button from "../utilities/Button";
import linkedIn from "../../assets/icons/linkedIn.png";
import Slider from "../utilities/Slider";

export function Developers() {
  const developers = [
    {
      name: "Kojo Kewa Junior",
      role: "Front End & UI/UX Design",
      linkedIn: "#",
      image: "",
    },
    {
      name: "Alfred Owusu Acheampong",
      role: "Backend Developement",
      linkedIn: "#",
      image: "",
    },
  ];
  return (
    <section className="developers container mb-200">
      <h3 className="section-title text-center">Developers</h3>
      <div className="dev-container scroll-x hide-scrollbar mb-50">
        {developers.map((dev, index) => (
          <div key={index} className="dev__card">
            <img src={linkedIn} alt="" className="dev__icon" />
            <div className="dev__image"></div>
            <div className="line"></div>
            <div className="dev__card-content">
              <h3 className="name">{dev.name}</h3>
              <p className="role">{dev.role}</p>
              <Button link={dev.link} />
            </div>
          </div>
        ))}
      </div>
      <Slider />
    </section>
  );
}
