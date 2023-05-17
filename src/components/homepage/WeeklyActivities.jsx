import React, { useState } from "react";
import "../../assets/css/homepage/WeeklyActivities.css";
import loveIcon from "../../assets/icons/love.png";

export function WeeklyActivities() {
  const activities = [
    { time: "7pm", title: "Wednesday Prayers" },
    { time: "7pm", title: "Sunday Bible Studies" },
    { time: "8am", title: "Divine Service" },
    { time: "7pm", title: "Friday Vesper Service" },
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(3);

  const handleClick = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? -1 : index);
  };

  return (
    <div className="activities container grid-5 mb-200">
      <div className="activity grid-title">
        <h3 className="text-650">Weekly Activities</h3>
        <p className="text-550">
          We've got an exciting lineup of activities we perform on a weekly
          basis.
        </p>
      </div>
      {activities.map((activity, index) => (
        <div
          key={index}
          className={`activity ${
            selectedCardIndex === index ? "selected" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <div className="card-top flex-between">
            <span className="tag">{activity.time}</span>
            <span className="loveIcon">
              <img src={loveIcon} alt="." />
            </span>
          </div>
          <h3 className="text-650">{activity.title}</h3>
        </div>
      ))}
    </div>
  );
}
