import { useEffect, useState } from "react";
import { ALL_RESTAURANTS_URL } from "./constants";

const useAllRestaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const fetchAllRestaurants = async () => {
    const data = await fetch(ALL_RESTAURANTS_URL);
    const jsonData = await data.json();
    // console.log(jsonData);
    const restaurantListData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    setRestaurantList(restaurantListData);
    setFilteredRestaurant(restaurantListData);
    // console.log("custom hook rest list data", restaurantListData);

    const cuisineListData  = jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info
    setCuisineList(cuisineListData);
    // console.log("cuisine list",cuisineListData);
    
  };

  const updateFilteredRestaurant = (filteredData) => {
    setFilteredRestaurant(filteredData);
  };
 
  return { restaurantList, filteredRestaurant, updateFilteredRestaurant, cuisineList };
};

export default useAllRestaurants;
