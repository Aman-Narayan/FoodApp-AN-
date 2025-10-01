import React from "react";
import HeadingComponent from "./Header";
const Shimer = () => {
  return (
    <>
      <div className="shimerSearchContainer">
        <input type="text" className="search-box" />
        <div className="Shimersearch-btn"></div>
      </div>

      <div className="shimerContainer-btn">
        <div className="Shimerfilter-btn"></div>
        <div className="Shimerfilter-btn"></div>
        <div className="Shimerfilter-btn"></div>
      </div>
      <div className="shimerContainer">
        <div className="shimerCard"></div>
        <div className="shimerCard"></div>
        <div className="shimerCard"></div>
        <div className="shimerCard"></div>
        <div className="shimerCard"></div>
      </div>
      <div className="shimerContainer">
        <div className="shimerCard"></div>
        <div className="shimerCard"></div>
        <div className="shimerCard"></div>
        <div className="shimerCard"></div>
        <div className="shimerCard"></div>
      </div>
    </>
  );
};

export default Shimer;
