import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CON_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item, index) => (
        <div key={`${item.card.info.id}-${index}`} className="item-list-card">
          <div className="item-details-row">
            <div className="item-text-info">
              <span className="item-name">{item.card.info.name}</span>
              <span className="item-price">
                {" "}
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="item-image-container">
              <img
                src={
                  item.card.info.imageId
                    ? CON_URL + item.card.info.imageId
                    : "https://cdn.vectorstock.com/i/1000v/37/07/not-available-sign-vector-22523707.avif"
                }
                className="item-image"
              />
              <button
                onClick={() => handleAddItem(item)}
                className="add-item-button"
              >
                Add +
              </button>
            </div>
          </div>
          <p className="item-description">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
