import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
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
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

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
    <div className="font-sans mx-10">
      <h1 className="pl-10 pt-5 text-xl font-semibold">Drishti, what's on your mind?</h1>
      <div className="flex items-center">
        <div>
          <button
            className="px-4 py-2 rounded-sm m-4 bg-gradient-to-r from-orange to-pink text-white cursor-pointer"
            onClick={handleFilter}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black p-2 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 rounded-sm m-4 bg-gradient-to-r from-orange to-pink text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div data-testid="resCard" className="flex flex-wrap justify-center">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            style={{ textDecoration: "none" }}
          >
            {/* if restaurant is promoted then add a promoted label to it */}
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted data={restaurant} />
            ) : (
              <RestaurantCard data={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
