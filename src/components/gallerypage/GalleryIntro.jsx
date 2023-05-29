import React from "react";
import "../../assets/css/gallerypage/GalleryIntro.css";
import GalleryBanner from "./GalleryBanner";
import GridColTwo from "../utilities/GridColTwo";

function GalleryIntro() {
  return (
    <div className="container mb-150" data-scroll-section>
      <GridColTwo
        title={"Checkout our gallery of wonderful pictures"}
        content={
          "Feast your eyes on our diverse collection of photos showcasing worship services, events and many more."
        }
      />

      <GalleryBanner />
    </div>
  );
}

export default GalleryIntro;
