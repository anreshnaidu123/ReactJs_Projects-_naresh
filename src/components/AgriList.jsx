import React from "react";
import "./AgriList.css"; // Make sure to include the CSS file

const StatsSection = () => {
  return (
    <>
      <div className="stats-section">
        <div className="stat-item">Agriculture Products</div>
        <div className="stat-item">Projects Completed</div>
        <div className="stat-item">Satisfied Clients</div>
        <div className="stat-item">Expert Farmers</div>
      </div>
      <div className="starts-section">
        <img src="./images/sections.png" alt="Agriculture Section" />
      </div>
    </>
  );
};

export default StatsSection;
