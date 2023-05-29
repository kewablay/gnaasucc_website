import React from "react";
import "../../assets/css/gallerypage/GalleryImages.css";
import ItemCard from "../utilities/ItemCard";
import GridColTwo from "../../components/utilities/GridColTwo";

function GalleryImages() {
  return (
    <div className="gallery container mb-200" data-scroll-section>
      <GridColTwo
        title={"Pictures from recent programs"}
        content={
          "We capture every single moment. Relive the memories by following the links below"
        }
      />

      <div className="galleryImages grid-2">
        <ItemCard galleryCard={"true"} title={"Traditional Sabbath"} />
        <ItemCard galleryCard={"true"} title={"Seraphim Praise"} />
        <ItemCard galleryCard={"true"} title={"Global Youth Day"} />
        <ItemCard galleryCard={"true"} title={"Sabbath Conference"} />
        {/* <EventCard />
        <EventCard />
        <EventCard /> */}
      </div>
    </div>
  );
}

export default GalleryImages;
