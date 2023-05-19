import React from "react";
import "../../assets/css/homepage/Departments.css";
import departments from "../../assets/images/departments.jpg";

export function Departments() {
  const departmentList = [
    "Communication",
    "Technical",
    "Deaconry",
    "Ushering",
    "Personal Ministry",
    "Youth Ministry",
    "Prisons Ministry",
    "Music Department",
    "Health and Temperance",
  ];

  return (
    <section
      className="departments mb-200 bg-primary py-100"
      data-scroll-section
    >
      <div className="content-wrapper container grid-2">
        <div className="dept-content my-auto">
          <h3 className="section-title">Departments</h3>
          <p className="section-content">
            Discover the backbone of our fellowship - our esteemed departments
            who work tirelessly to ensure smooth daily operations.
          </p>
        </div>

        <div className="dept-image">
          <img src={departments} alt="departments" />
        </div>
      </div>
      {/*  */}
      <marquee className="marquee scroll-x hide-scrollbar">
        {departmentList.map((department, index) => (
          <p key={department} className="dept-pill">{department}</p>
        ))}
      </marquee>
    </section>
  );
}
