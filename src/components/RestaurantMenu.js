import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantMenu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (restaurantMenu == null) {
    return <MenuShimmer />;
  }
  const { name, cuisines, costForTwoMessage, areaName } =
    restaurantMenu?.data?.cards[2]?.card?.card?.info || {};
 
  const itemCards =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;


  const categories =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div data-testid="resCard" className="mx-[400]">
      <h1 className="font-bold mt-10 ">{name}</h1>
      <p className="text-gray-500">{cuisines ? cuisines.join(", ") : "No cuisines available"}</p>
      <p className="text-gray-500">{areaName}</p>
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
