import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

// CUSTOM HOOK
const useRestaurantMenu = (resId) => {
  // fetch data

  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    console.log(data);
    const jsonData = await data.json();

    setRestaurantMenu(jsonData);
  };

  return restaurantMenu;
};

export default useRestaurantMenu;
