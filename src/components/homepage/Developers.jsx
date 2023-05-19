import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/homepage/Developers.css";
import Button from "../utilities/Button";
import linkedIn from "../../assets/icons/linkedIn.png";
import Slider from "../utilities/Slider";

export function Developers() {
  const developers = [
    {
      name: "Kojo Kewa Junior",
      role: "Front End & UI/UX Design",
      linkedIn: "#",
      image: "",
    },
    {
      name: "Alfred Owusu Acheampong",
      role: "Backend Developement",
      linkedIn: "#",
      image: "",
    },
  ];

  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  let scrollBackButton = null;
  let scrollForwardButton = null;
  let mainSlider = null;

  // CHECK WHETHER TO ACTIVATE SLIDER
  useEffect(() => {
    const eventContainer = containerRef.current;
    const disableSlider =
      eventContainer.scrollWidth <= eventContainer.clientWidth;
    console.log(disableSlider);
    if (disableSlider) {
      console.log("disable triggered");
      mainSlider.classList.add("disabled");
    } else {
      mainSlider.classList.remove("disabled");
    }
  }, [mainSlider]);

  const handleScroll = (scrollOffset) => {
    const newScrollPosition = scrollPosition + scrollOffset;
    console.log(containerRef);
    containerRef.current.scrollLeft = newScrollPosition;
    setScrollPosition(newScrollPosition);
  };

  const handleScrollEnd = () => {
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const scrollEndReached = scrollPosition >= maxScroll;
    if (scrollEndReached) {
      // Scroll position is at the end
      // Disable forward arrow and enable back arrow

      scrollForwardButton.disabled = true;
      scrollBackButton.disabled = false;
      return;
    } else {
      // Scroll position is not at the end
      // Enable both forward and back arrows
      scrollForwardButton.disabled = false;
      scrollBackButton.disabled = false;
    }
  };

  const scrollBack = () => {
    console.log(scrollPosition);
    if (scrollPosition !== 0) {
      handleScroll(-320);
      handleScrollEnd();
    } else if (scrollPosition === 0) {
      // Scroll position at start
      // Disable back arrow
      scrollForwardButton.disabled = false;
      scrollBackButton.disabled = true;
    }
  };

  const scrollForward = () => {
    handleScroll(320);
    handleScrollEnd();
    console.log("scroll forward triggered");
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
            <div className="dev__image"></div>
            <div className="line"></div>
            <div className="dev__card-content">
              <h3 className="name">{dev.name}</h3>
              <p className="role">{dev.role}</p>
              <Button link={dev.link} />
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
