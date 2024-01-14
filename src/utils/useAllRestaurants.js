import { useEffect, useState } from "react";
import { ALL_RESTAURANTS_URL } from "./constants";

const useAllRestaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const fetchAllRestaurants = async () => {
    const data = await fetch(ALL_RESTAURANTS_URL);
    const jsonData = await data.json();
    console.log(jsonData);
    const restaurantListData =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurantListData);
    setFilteredRestaurant(restaurantListData);
    console.log("custom hook rest list data", restaurantListData);
  };

  const updateFilteredRestaurant = (filteredData) => {
    setFilteredRestaurant(filteredData);
  };
 
  return { restaurantList, filteredRestaurant, updateFilteredRestaurant };
};

export default useAllRestaurants;
