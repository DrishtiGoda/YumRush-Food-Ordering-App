import { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-full bg-gray-100 my-4 shadow-sm shadow-gray-200  px-4 py-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <button className="font-bold">
            {data.title} ({data.itemCards.length})
          </button>
          <span> {showItems ? " ⋀" : " ⋁"  } </span>
        </div>
        {showItems && <CategoryList list={data.itemCards} path="resCategory"  />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
