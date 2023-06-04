import React from "react";
import PersonalityCard from "../utilities/PersonalityCard";

function Patrons() {
  const Patrons = [
    { name: "Pastor. Prof. Y. A Ankomah", profile: "#" },
    { name: "Pastor. Prof. Y. A Ankomah", profile: "#" },
    { name: "Pastor. Prof. Y. A Ankomah", profile: "#" },
  ];
  return <div className="container mb-200" data-scroll-section>
    <h3 className="section-title mb-title">Meet Our Patrons</h3>
    <div className="patrons_container grid-3">
    {Patrons.map(patron => (
      <PersonalityCard name={patron.name} link={patron.profile} isPatron={"true"} />
    ))}

    </div>
  </div>;
}

export default Patrons;
