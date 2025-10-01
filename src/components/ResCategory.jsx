import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div className="category-section-wrapper">
      <div className="category-card">
        <div className="category-header" onClick={handleClick}>
          <span className="category-title">
            {data.title}{" "}
            <span className="item-count">({data.itemCards.length})</span>
          </span>
          <span className="toggle-icon">{showItem ? "⬆️" : "⬇️"}</span>
        </div>

        {showItem && (
          <div className="category-item-list">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResCategory;
