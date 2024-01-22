import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // const { resData } = props;

  var { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    props?.data.info;
  // transform transition-transform
  return (
    <div className="w-[280] bg-red-50 hover:bg-red-100 rounded-xl m-4 ">
      <img
        className="rounded-tr-lg rounded-tl-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
      />

      <div className="px-2 py-4 flex flex-col justify-evenly">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <h4 className="text-gray-500 truncate">{cuisines.join(", ")}</h4>
        <div className="flex justify-between">
          <h4 className="text-green-700">{costForTwo}</h4>
          <h4 className="rating">{avgRating} ⭐️⭐️⭐️</h4>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard => output - RestaurantCardPromoted

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-green-200 h-9 rounded-bl-lg rounded-tl-lg w-4 "></div>
        <label 
        className="absolute bg-green-200 text-black w-24 p-0.5 rounded-sm rounded-tl-sm items-center justify-center flex shadow-lg shadow-green-400/40">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
