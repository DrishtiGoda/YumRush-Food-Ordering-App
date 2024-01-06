import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // const { resData } = props;

  var { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    props?.data.info;

  return (
    <div className="res-card">
      <img className="res-img" src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="res-content">
        <h3 className="name">{name}</h3>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <div className="price-rating">
          <h4 className="cost">{costForTwo}</h4>
          <h4 className="rating">{avgRating} ⭐️⭐️⭐️</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
