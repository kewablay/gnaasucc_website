import React from "react";
import "../../assets/css/utilities/itemCard.css";

function ItemCard({ title, galleryCard }) {
  return (
    <div className="itemCard">
      <div
        className={`${galleryCard ? "galleryCard-image" : "itemCard-image"}`}
      ></div>
      <div className="itemCard-content">
        <h4 className="sub-title">{title}</h4>
        <p className="small-text">7th May, 2023</p>
      </div>
    </div>
  );
}

export default ItemCard;
