import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.data;

  return (
    <div className="res-card">
      <img className="res-img" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rs. {costForTwo / 100}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
