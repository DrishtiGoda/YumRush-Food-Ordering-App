import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Cuisines from "./Cuisines";
import Footer from "./Footer";

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
  const { restaurantList, filteredRestaurant, updateFilteredRestaurant, cuisineList} = useAllRestaurants();
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
    <div>

  
    <div className="mx-10">
      <h1 className="pl-10 pt-5 text-2xl font-semibold mx-[100px]">
        Drishti, what's on your mind?
      </h1>
      <div className="py-2 border-2 border-solid border-white overflow-x-auto no-scrollbar whitespace-nowrap mx-[100px]">
        {cuisineList?.map((cuisine) => (
          <Cuisines data={cuisine} key={cuisine.id} />
        ))}
      </div>
      <hr className="container mx-auto" />
      <h1 className="pl-10 pt-5 text-2xl font-semibold mx-[100px]">
        Restaurants with online food delivery
      </h1>
      <div className="flex items-center justify-between mx-[100px] py-4">
      <div className="ml-[30px]">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-gray-400 rounded-3xl px-2 py-1 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 ml-2 rounded-3xl shadow-sm border cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="mr-[30px]">
          <button
            className="px-3 py-1 rounded-3xl shadow-sm border cursor-pointer"
            onClick={handleFilter}
          >
            Top Rated Restaurants
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
    <Footer/>
    </div>
  );
};

export default Body;
