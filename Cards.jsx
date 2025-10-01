import React from "react";
import { CON_URL } from "./src/utils/constant";

const Cards = (probs) => (
  <div className="card ">
    <img
      src={CON_URL + probs?.resData?.info?.cloudinaryImageId}
      alt={probs?.item?.info?.name}
      className="cardImages"
    />
    <div className="container">
      <h4>
        <b>{probs?.resData?.info?.name}</b>
      </h4>
      <p>{probs?.resData?.info?.cuisines.slice(0, 5).join(",")}</p>
      <h4>{probs?.resData?.info?.avgRating} ⭐</h4>
      <br />
      <p className="DiliverTime">
        {probs?.resData?.info?.sla?.deliveryTime} minutes
      </p>
    </div>
  </div>
);

export const withPromotedLabel = (Cards) => {
  return (probs) => {
    return (
      <>
        <label className="PromotedLable">Promonted</label>
        <Cards {...probs} />
      </>
    );
  };
};

export default Cards;
