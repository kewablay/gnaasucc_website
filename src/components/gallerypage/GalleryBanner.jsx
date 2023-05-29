import React from "react";
import "../../assets/css/gallerypage/GalleryBanner.css";
import galleryVid from "../../assets/gallery-video2.mp4";

function GalleryBanner() {
  return (
    <div className="galleryBanner mb-200">
      <video autoPlay playsInline muted loop>
        <source src={galleryVid} />
      </video>
    </div>
  );
}

export default GalleryBanner;
