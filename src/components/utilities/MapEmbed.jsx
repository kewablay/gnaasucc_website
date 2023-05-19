import React, { useState, useEffect } from "react";
import placeholderImage from "../../assets/images/map.png";

const MapEmbed = ({ src }) => {
  const [mapError, setMapError] = useState(false);

  const handleMapError = () => {
    setMapError(true);
  };

  useEffect(() => {
    const iframe = document.getElementById("map-iframe");
    iframe.addEventListener("error", handleMapError);

    return () => {
      iframe.removeEventListener("error", handleMapError);
    };
  }, []);

  return (
    <div
      className={`map img-div ${mapError ? "map-error" : ""}`}
      style={{
        backgroundImage: `url(${placeholderImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!mapError && (
        <iframe
          id="map-iframe"
          src={src}
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MapEmbed;
