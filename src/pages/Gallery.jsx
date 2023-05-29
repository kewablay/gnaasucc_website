import React from "react";
import { Navbar, SocialMedia, Footer, Header } from "../components/layout";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";
import galleryImg from "../assets/images/gallery-bg.png";
import GalleryIntro from "../components/gallerypage/GalleryIntro";
import GalleryImages from "../components/gallerypage/GalleryImages";

function Gallery() {
  useLocomotiveScroll(true);
  return (
    <div>
      <Navbar />
      <Header isMainheader={false} page={"Gallery"} bgImage={galleryImg}/>
      <GalleryIntro />
      <GalleryImages /> 
      <SocialMedia bgColor={"#FFF5E6"} />
      <Footer />
    </div>
  );
}

export default Gallery;
