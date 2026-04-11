import { CDN_URL } from "../utils/constants";
import { RES_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        onError={(e) => e.target.src = RES_URL}
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
