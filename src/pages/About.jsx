import React from "react";
import { Navbar, SocialMedia, Footer, Header } from "../components/layout";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";
import Aboutbg from "../assets/images/about-bg.png";
import Presidency from "../components/aboutpage/Presidency";
import Patrons from "../components/aboutpage/Patrons";

function About() {
  useLocomotiveScroll(true);
  return (
    <div>
      <Navbar />
      <Header page={"About Us"} bgImage={Aboutbg} />
      <Presidency />
      <Patrons />
      <SocialMedia bgColor={"#EFF8E2"} />
      <Footer />
    </div>
  );
}

export default About;
