import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // const { resData } = props;

  var { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    props?.data.info;

  return (
    <div className="w-[280] m-5 bg-red-50 hover:bg-red-100 rounded-xl">
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

export default RestaurantCard;
