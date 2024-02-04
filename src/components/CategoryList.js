import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryList = ({ list }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  console.log("items", list);
  return (
    <div>
      {list.map((item) => (
        <div
        data-testid = "fooditems"
          key={item.card.info.id}
          className="border-b-2 border-gray-200 flex items-center justify-between p-2"
        >
          <div className="w-9/12 p-2">
            <h1>{item.card.info.name}</h1>
            <h2 className="text-sm">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h2>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="p-2">
            <div className="absolute">
              <button
                className="px-2 py-0.5 mt-14 mx-10 bg-white shadow-lg rounded-md hover:border-2 hover:border-black"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-32 rounded-md"
              src={IMG_CDN_URL + item.card.info.imageId}
              // alt={item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
