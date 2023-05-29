import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../assets/css/LocomotiveScroll.css";
import imagesLoaded from "imagesloaded";

export default function useLocomotiveScroll(start, history) {
  return useEffect(() => {
    if (!start) return;

    const scrollElement = document.querySelector("#root");

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollElement,
      smooth: true,
      multiplier: 2.5,
      class: "is-reveal",
      smoothMobile: false,
    });

    imagesLoaded(document.querySelector("body"), function (instance) {
      console.log("all images are loaded");
      locomotiveScroll.update();
    });

    // `useEffect`'s cleanup phase
    return () => locomotiveScroll.destroy();
  }, [start]);
}
