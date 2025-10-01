import React from "react";
import HeadingComponent from "./Header";

const ShimerForResMEnu = () => {
  return (
    <>
      <HeadingComponent />
      <p className="menu-path">Home / Resturant_Name</p>
      <div className="shimmer-container">
        <div className="shimmer-header-content">
          <h1 className="shimmer-restaurant-name">Resturant Name</h1>
          <div className="shimmer-menu-details">
            <h3 className="shimmer-rating-cost">
              ⭐ 1-5 (0.0K+ ratings) - ₹000 for two
            </h3>
            <h5 className="shimmer-cuisines">Items,Specials </h5>
            <h5 className="shimmer-city">AreaName - City</h5>
          </div>
        </div>

        <div className="shimmer-loading-zone">
          <div className="shimmer-placeholder-section">
            <div className="shimmer-title-line-lg"></div>
            <div className="shimmer-title-line-md"></div>
            <div className="shimmer-title-line-sm"></div>
          </div>

          <div className="shimmer-accordion-placeholders">
            <div className="shimmer-accordion-line"></div>
            <div className="shimmer-accordion-line"></div>
            <div className="shimmer-accordion-line"></div>
            <div className="shimmer-accordion-line"></div>
            <div className="shimmer-accordion-line"></div>
            <div className="shimmer-accordion-line"></div>
            <div className="shimmer-accordion-line"></div>
            <div className="shimmer-accordion-line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimerForResMEnu;
