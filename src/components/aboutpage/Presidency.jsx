import React from "react";
import PersonalityCard from "../utilities/PersonalityCard";

function Presidency() {
  const Presidency = [
    { name: "Emmanuel Nkoom", role: "Main President" },
    { name: "Emmanuel Ackaah", role: "First Assist" },
    { name: "Henry Kankam", role: "Second Assist" },
  ];

  return (
    <div className="presidency mb-200 container" data-scroll-section>
      <h3 className="section-title">Current Presidency</h3>
      <div className="presidency_container grid-3">
        {Presidency.map((pres) => (
          <PersonalityCard name={pres.name} role={pres.role} />
        ))}
      </div>
    </div>
  );
}

export default Presidency;
