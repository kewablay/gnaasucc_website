import React, { useState, useRef, useEffect } from "react";
import "../../assets/css/homepage/UpcomingActivities.css";
import praiseSabbath from "../../assets/images/praise-sabbath.jpg";
import traditionalSabbath from "../../assets/images/traditional-sabbath.jpeg";
import seraphimPraies from "../../assets/images/seraphim-praise.jpeg";

import Slider from "../utilities/Slider";
import CircledText from "../utilities/CircledText";
import useActivateSlider from "../../hooks/useActivateSlider";

export function UpcomingActivities() {
  const upcoming = [
    {
      title: "Praise Sabbath",
      image: praiseSabbath,
      datePosted: "7th March 2023",
    },
    {
      title: "Traditional Sabbath",
      image: traditionalSabbath,
      datePosted: "2th March 2023",
    },
    {
      title: "Seraphim Praise",
      image: seraphimPraies,
      datePosted: "10th March 2023",
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
    <section className="upcoming mb-200" data-scroll-section>
      <h3 className="text-650 section-title">
        Upcoming <CircledText text={"Events"} />
      </h3>
      <div
        className="upcoming-container scroll-x hide-scrollbar smooth-scroll mb-50"
        ref={containerRef}
      >
        {upcoming.map((event, index) => (
          <div key={index} className="u-event">
            <div className="u-event__image">
              <img src={event.image} alt="eventImage" />
            </div>
            <div className="u-event__content">
              <p className="u-event__title">{event.title}</p>
              <small>{event.datePosted}</small>
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
