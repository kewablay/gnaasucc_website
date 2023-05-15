import React from "react";
import "../../assets/css/homepage/WeeklyActivities.css";
import loveIcon from "../../assets/icons/love.png";

export function WeeklyActivities() {
  return (
    <div className="activities container grid-5 mb-200">
      <div className="activity grid-title">
        <h3 className="text-650">Weekly Activities</h3>
        <p className="text-550 ">
          We've got exciting lineup of activities we perform on weekly basis.
        </p>
      </div>
      <div className="activity">
        <div className="card-top flex-between">
          <span className="tag">8am</span>
          <span className="loveIcon">
            <img src={loveIcon} alt="." />
          </span>
        </div>
        <h3 className="text-650">Devine Service</h3>
      </div>
      <div className="activity">
        <div className="card-top flex-between">
          <span className="tag">7pm</span>
          <span className="loveIcon">
            <img src={loveIcon} alt="." />
          </span>
        </div>
        <h3 className="text-650">Sunday Bible Studies</h3>
      </div>
      <div className="activity">
        <div className="card-top flex-between">
          <span className="tag">7pm</span>
          <span className="loveIcon">
            <img src={loveIcon} alt="." />
          </span>
        </div>
        <h3 className="text-650">Wednesday Prayers</h3>
      </div>
      <div className="activity">
        <div className="card-top flex-between">
          <span className="tag">7pm</span>
          <span className="loveIcon">
            <img src={loveIcon} alt="." />
          </span>
        </div>
        <h3 className="text-650">Friday Vesper Service</h3>
      </div>
    </div>
  );
}
