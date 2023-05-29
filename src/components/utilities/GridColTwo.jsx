import React from "react";

function GridColTwo({title, content}) {
  return (
    <div className="mb-100 content-grid strip-mt">
      <h3 className="section-title">{title}</h3>
      <p className="section-content">
        {content}
      </p>
    </div>
  );
}

export default GridColTwo;
