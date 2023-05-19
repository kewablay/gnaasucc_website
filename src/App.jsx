import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";

import "./assets/css/LocomotiveScroll.css";
import useLocomotiveScroll from "./hooks/useLocomotiveScroll";

// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  // const options = {
  //   smooth: true,
  // };

  // const mainContainer = document.querySelector("#root");
  useLocomotiveScroll(true)
  return (
    <>
      {/* <LocomotiveScrollProvider options={options} containerRef={mainContainer}>
      </LocomotiveScrollProvider> */}

      
        <Homepage />
    </>
  );
}

export default App;
