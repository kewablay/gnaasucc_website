import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/homepage/Developers.css";
import Button from "../utilities/Button";
import linkedIn from "../../assets/icons/linkedIn.png";
import Slider from "../utilities/Slider";
import KewaBlay from "../../assets/images/kewablay.png";
import Alfred from "../../assets/images/alfred.png";

export function Developers() {
  const developers = [
    {
      name: "Kojo Kewa Junior",
      role: "Front End & UI/UX Design",
      linkedIn: "https://gh.linkedin.com/in/kewa-blay-47883a206?original_referer=https%3A%2F%2Fwww.google.com%2F",
      image: KewaBlay,
    },
    {
      name: "Alfred Owusu Acheampong",
      role: "Backend Developement",
      linkedIn: "https://www.linkedin.com/in/alfred-acheampong/",
      image: Alfred,
    },
  ];

  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  let scrollBackButton = null;
  let scrollForwardButton = null;
  let mainSlider = null;

  // CHECK WHETHER TO ACTIVATE SLIDER

  useEffect(() => {
    console.log("useEffect triggered");
    const eventContainer = containerRef.current;

    const updateSlider = () => {
      const disableSlider =
        eventContainer.scrollWidth <= eventContainer.clientWidth;

      if (disableSlider) {
        mainSlider.classList.add("disabled");
      } else {
        mainSlider.classList.remove("disabled");
      }
    };

    updateSlider();

    const handleResize = () => {
      updateSlider();
    };

    window.addEventListener("resize", handleResize);

    // cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mainSlider]);

  const handleScroll = (scrollOffset) => {
    const newScrollPosition = scrollPosition + scrollOffset;
    // checkscrollend
    checkScroll();
    // checkscrollstart

    containerRef.current.scrollLeft = newScrollPosition;
    setScrollPosition(newScrollPosition);
  };

  const checkScroll = () => {
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const scrollEndReached =
      scrollPosition >= maxScroll || scrollPosition >= 320;

    const scrollStart = scrollPosition === 0 || scrollPosition <= 320;

    if (scrollEndReached) {
      scrollForwardButton.disabled = true;
      scrollBackButton.disabled = false;
      setScrollPosition(maxScroll);
    } else {
      scrollForwardButton.disabled = false;
      scrollBackButton.disabled = false;
    }
  };

  const scrollBack = () => {
    if (scrollPosition >= 320) {
      handleScroll(-320);
    } else {
      scrollForwardButton.disabled = false;
      scrollBackButton.disabled = true;
      setScrollPosition(0);
    }

    console.log("scroll back triggered");
  };

  const scrollForward = () => {
    handleScroll(320);
    console.log("scroll forward triggered");
    // handleScrollEnd();
  };

  return (
    <section className="developers container mb-200" data-scroll-section>
      <h3 className="section-title text-center">Developers</h3>
      <div
        className="dev-container scroll-x hide-scrollbar mb-50 smooth-scroll"
        ref={containerRef}
      >
        {developers.map((dev, index) => (
          <div key={index} className="dev__card">
            <img src={linkedIn} alt="" className="dev__icon" />
            <div className="dev__image">
              <img src={dev.image} alt="" className="image-fluid" />
            </div>
            <div className="line"></div>
            <div className="dev__card-content">
              <h3 className="name">{dev.name}</h3>
              <p className="role">{dev.role}</p>
              <Button link={dev.linkedIn} />
            </div>
          </div>
        ))}
      </div>
      <Slider
        scrollBack={scrollBack}
        scrollForward={scrollForward}
        scrollBackRef={(button) => (scrollBackButton = button)}
        scrollForwardRef={(button) => (scrollForwardButton = button)}
        sliderRef={(slider) => (mainSlider = slider)}
      />
    </section>
  );
}
