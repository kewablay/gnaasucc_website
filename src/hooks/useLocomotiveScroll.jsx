import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../assets/css/LocomotiveScroll.css";
import imagesLoaded from "imagesloaded";

export default function useLocomotiveScroll(start) {
  return useEffect(() => {
    if (!start) return;

    const scrollElement = document.querySelector("#root");

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollElement,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });

    imagesLoaded(document.querySelector("body"), function (instance) {
      console.log("all images are loaded");
      locomotiveScroll.update();
    });

    // new ResizeObserver(() => scroll.update()).observe(scrollElement);
  }, [start]);
}
