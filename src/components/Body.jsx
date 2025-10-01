import React from "react";
import Cards, { withPromotedLabel } from "../../Cards";
import { useState, useEffect } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus/useOnlineStatus";
import OnlineStatusComponent from "./OnlineStatusComponent";
import mockDataofSwiggy from "../utils/mockDataofSwiggy";

const BodySection = () => {
  useEffect(() => {
    fetchData();
    console.log("FetchDaata");
  }, []);
  const [resturants, setResturants] = useState([]);
  const [FilteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const CardsPromotedLabel = withPromotedLabel(Cards);

  const fetchData = async () => {
    try {
      // const data = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9218109&lng=80.94013749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );
      const json = mockDataofSwiggy(); //await data.json();

      const restaurantData = json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("restaurant_grid_listing_v2")
      )?.card?.card.gridElements?.infoWithStyle?.restaurants;
      setFilteredResturants(restaurantData);
      setResturants(restaurantData);
    } catch (error) {
      console.error(error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <OnlineStatusComponent />;

  // e?.resData?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  const SearchHandler = () => {
    const filterSearchTxt = resturants.filter((e) =>
      e?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResturants(filterSearchTxt);
  };

  return resturants == 0 ? (
    <Shimer />
  ) : (
    <div className="bodySection">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Enter Recipe"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                SearchHandler();
              }
            }}
          />
          <button className="search-btn" onClick={SearchHandler}>
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredResturants(resturants);
          }}
        >
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const listing1 = resturants.filter(
              (e) => e?.info?.avgRating >= 4.5
            );
            setFilteredResturants(listing1);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const DiliverFilter = resturants.filter(
              (e) => e?.info?.sla?.deliveryTime <= 25
            );
            setFilteredResturants(DiliverFilter);
          }}
        >
          Fast Delivery
        </button>
      </div>
      <div className="cardSection">
        {FilteredResturants.map((res, idx) => (
          <Link
            key={res?.info?.id}
            to={
              "/resturant/" +
              res?.info?.name +
              "&" +
              res?.info?.cuisines.slice(0, 5).join(",") +
              "&" +
              res?.info?.avgRating +
              "&" +
              res?.info?.sla?.deliveryTime
            }
            className="ResLink"
          >
            {/* {console.log(res?.info?.promoted)} */}
            {res?.info?.promoted ? (
              <CardsPromotedLabel resData={res} />
            ) : (
              <Cards resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodySection;
