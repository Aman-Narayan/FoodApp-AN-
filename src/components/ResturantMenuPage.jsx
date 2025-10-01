import React, { useState, useEffect } from "react";
import HeadingComponent from "./Header";
import Footer from "./Footer";
import ShimerForResMEnu from "./ShimerForResMEnu";
import { Link, useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
import mockData from "../utils/mockData2ofRes";

const ResturantMenuPage = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();
  const ResData = id.split("&");

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchMenu = async () => {
    try {
      // const data = await fetch(RES_API_ULR + id);
      const json = mockData(); //await data.json()

      const cards = json[0]?.data?.cards || [];

      // Find restaurant info dynamically
      const resCard = cards.find(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );

      // Find categories dynamically
      const categories =
        cards
          .find((c) => c?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) =>
              c?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) || [];

      setResInfo({
        info: resCard?.card?.card?.info,
        categories: categories,
      });
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  if (!resInfo) return <ShimerForResMEnu />;

  const { areaName, city } = resInfo.info || {};

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <HeadingComponent />

      <div className="menu-page-wrapper">
        <p className="menu-breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>{" "}
          / {ResData[0]}
        </p>

        <h1 className="restaurant-name">{ResData[0]}</h1>

        <div className="restaurant-info-card">
          <h3 className="info-rating-cost">
            ⭐ {ResData[2]} ({randomNumber(100, 999)}) • ₹
            {randomNumber(50, 999)} for two
          </h3>
          <h5 className="info-cuisines">{ResData[1]}</h5>
          <h5 className="info-area-city">
            {areaName} - {city}
          </h5>
        </div>
      </div>

      <div className="menu-categories-wrapper">
        {resInfo.categories?.map((res) => (
          <ResCategory key={res?.card?.card?.title} data={res.card.card} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ResturantMenuPage;
