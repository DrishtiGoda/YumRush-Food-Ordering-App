import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

function searchRestaurant(searchText, restaurantList) {
  const filterByName = restaurantList.filter((res) =>
    res?.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterByName;
}

function toRatedRestaurants(restaurantList) {
  const topRestaurants = restaurantList.filter(
    (res) => res?.info.avgRating > 4.0
  );
  return topRestaurants;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { restaurantList, filteredRestaurant, updateFilteredRestaurant } =
    useAllRestaurants();

  const handleSearch = () => {
    const searchByName = searchRestaurant(searchText, restaurantList);
    updateFilteredRestaurant(searchByName);
  };

  const handleFilter = () => {
    const filteredList = toRatedRestaurants(restaurantList);
    updateFilteredRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="status">
        <h1>
          Looks like you are Offline!🙁 Please check your internet connection.
        </h1>
      </div>
    );
  }

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            style={{ textDecoration: "none" }}
          >
            <RestaurantCard data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
