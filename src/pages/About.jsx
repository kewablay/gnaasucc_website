import React from "react";
import { Navbar, SocialMedia, Footer } from "../components/layout";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";

function About() {
  useLocomotiveScroll(true);
  return (
    <div>
      <Navbar />
      <SocialMedia bgColor={"#EFF8E2"} />
      <Footer />
    </div>
  );
}

export default About;
