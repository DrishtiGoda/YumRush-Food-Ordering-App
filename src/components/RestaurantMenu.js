import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantMenu(jsonData);
  };

  if (restaurantMenu == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item.card.info.name} {"Rs-"}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
