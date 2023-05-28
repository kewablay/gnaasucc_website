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
          "Feast your eyes on a diverse collection of photos that capture the essence of our worship services, events, and community outreach programs."
        }
      />

      <GalleryBanner />
    </div>
  );
}

export default GalleryIntro;
