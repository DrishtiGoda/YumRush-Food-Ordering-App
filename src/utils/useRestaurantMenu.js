import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
import { json } from "react-router-dom";

// CUSTOM HOOK
const useRestaurantMenu = (resId) => {
  // fetch data

  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsonData = await data.json();
    setRestaurantMenu(jsonData);
    // console.log("Res category", jsonData);
  };

  return restaurantMenu;
};

export default useRestaurantMenu;

//export const CUISINES_IMG_URL =
// "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";