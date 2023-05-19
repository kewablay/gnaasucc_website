import { useEffect } from "react";

const useActivateSlider = (containerRef, mainSlider) => {
  useEffect(() => {
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

    updateSlider(); // Run the initial update

    const handleResize = () => {
      updateSlider();
    };

    window.addEventListener("resize", handleResize);

    // cleanup function 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef, mainSlider]);
};

export default useActivateSlider;
