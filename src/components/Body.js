import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
  const [restaurantList, setrestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    // Optional Chaining
    const restaurantListData =
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("restaurant inside use useEffect", restaurantList);
    setrestaurantList(restaurantListData);
    console.log("dcbhbdc", restaurantListData);
    setFilteredRestaurant(restaurantListData);
  };

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = toRatedRestaurants(restaurantList);
              console.log(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
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
          <button
            className="search-btn"
            onClick={() => {
              // filter restaurat cards and update UI
              const searchByName = searchRestaurant(searchText, restaurantList);
              setFilteredRestaurant(searchByName);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
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
