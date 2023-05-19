import React from "react";
import { Navbar, SocialMedia, Footer } from "../components/layout";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";


function Gallery() {
  useLocomotiveScroll(true);
  return (
    <div>
      <Navbar />
      <SocialMedia bgColor={"#FFF5E6"} />
      <Footer />
    </div>
  );
}

export default Gallery;
