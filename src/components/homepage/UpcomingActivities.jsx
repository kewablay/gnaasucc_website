import React, { useState, useRef, useEffect } from "react";
import "../../assets/css/homepage/UpcomingActivities.css";
import praiseSabbath from "../../assets/images/praise-sabbath.jpg";
import traditionalSabbath from "../../assets/images/traditional-sabbath.jpeg";
import seraphimPraies from "../../assets/images/seraphim-praise.jpeg";

import Slider from "../utilities/Slider";
import CircledText from "../utilities/CircledText";

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
    const disableSlider =
      eventContainer.scrollWidth <= eventContainer.clientWidth;
    console.log(
      "scroll-width: ",
      eventContainer.scrollWidth,
      "clientWidth: ",
      eventContainer.clientWidth
    );
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
    console.log("scroll end : ", scrollEndReached);
    if (scrollEndReached) {
      // Scroll position is at the end
      // Disable forward arrow and enable back arrow
      console.log("scroll end reached");
      scrollForwardButton.disabled = true;
      scrollBackButton.disabled = false;
      console.log(scrollForwardButton);
      return;
    } else {
      // Scroll position is not at the end
      // Enable both forward and back arrows
      scrollForwardButton.disabled = false;
      scrollBackButton.disabled = false;
      console.log("removed disabled");
      console.log(scrollForwardButton);
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
    console.log("scroll back triggered");
  };

  const scrollForward = () => {
    handleScroll(320);
    handleScrollEnd();
    console.log("scroll forward triggered");
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
