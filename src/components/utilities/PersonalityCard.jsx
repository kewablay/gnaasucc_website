import React from "react";
import Button from "../utilities/Button";
import '../../assets/css/utilities/PersonalityCard.css'

function PersonalityCard({ isPatron, name, role,link }) {
  return (
    <div className="p-card">
      <div className={`p-card__image ${isPatron && "img-rounded"}`}></div>
      <div className="p-card__content">
        <h4 className="sub-title ">{name}</h4>
        {isPatron ? <Button text="View Profile" link={link}/> : <p className="small-text">{role}</p>}
      </div>
    </div>
  );
}

export default PersonalityCard;
