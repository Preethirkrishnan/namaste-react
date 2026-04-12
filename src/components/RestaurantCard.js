import { CDN_URL } from "../utils/constants";
import { RES_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    resData?.info;

  return (
    <div className="p-3 rounded-lg bg-gray-100 hover:shadow-lg">
      <img
        className="mx-auto rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        onError={(e) => (e.target.src = RES_URL)}
      />
      <h2 className="mt-3 font-bold">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
