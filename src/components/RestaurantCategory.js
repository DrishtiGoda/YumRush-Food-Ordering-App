import { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({key, data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  // console.log(data);
  // var { title } = props;
  

  const handleClick = () => {
    // showItems == true ? false : true;
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
        {showItems && <CategoryList list={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
