import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const params = useParams();

  const resDetails = useRestaurantMenu(params);

  //conditional checks
  if (resDetails === null) return <h1>Loading...</h1>;

  //never destructure before checking data exists or not
  // if you do, use fallback objects || {} to aviod errors
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    sla,
  } = resDetails?.cards[2]?.card?.card?.info || {};

  const categories =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      )
      .map((c) => c.card?.card);

  return (
    <div className="py-4 px-10 w-7/12 mx-auto">
      <Link to="/" className="text-blue-600 hover:text-blue-800">
        Back To Restaurants
      </Link>
      <h1 className="mt-5 text-3xl font-bold mb-2">{name}</h1>
      <div className="bg-gray-100 rounded shadow-md p-4 mb-5">
        <h4 className="mb-2 text-lg font-semibold">
          {avgRating} <span className="text-sm">({totalRatingsString})</span> -{" "}
          {costForTwoMessage}
        </h4>
        <h5 className="mb-2">{cuisines.join(", ")}</h5>
        <h5>{sla.slaString}</h5>
      </div>

      {categories.map((cat, index) => (
        <RestaurantCategory
          item={cat}
          key={cat.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => index === showIndex ? setShowIndex(null) : setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
