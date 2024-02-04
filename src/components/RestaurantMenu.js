import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantMenu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (restaurantMenu == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, areaName } =
    restaurantMenu?.data?.cards[0]?.card?.card?.info || {};
  const itemCards =
    restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  console.log("item cards", itemCards);

  const categories =
    restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);

  return (
    <div data-testid="resCard" className="mx-[400]">
      <h1 className="font-bold mt-10 ">{name}</h1>
      <p className="text-gray-500">{cuisines ? cuisines.join(", ") : "No cuisines available"}</p>
      <p className="text-gray-500">{areaName}</p>
      {/* <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p> */}
      {/* categories accordian */}
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItems={index == showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
