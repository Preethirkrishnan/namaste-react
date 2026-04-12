import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
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
      ?.map((c) => c?.card?.card)
      .filter(Boolean);

  return (
    <div className="py-4 px-10">
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
        <div key={index} className="mb-10">
          <h3 className="font-bold text-xl mb-2">
            {cat.title} ({cat.itemCards.length})
          </h3>
          {cat.itemCards.map((item) => (
            <div
              className="flex justify-between items-center border border-gray-300 rounded shadow-sm p-3 mb-3"
              key={item.card.info.id}
            >
              <div>
                <h4 className="mb-0 text-lg font-semibold">
                  {item.card.info.name}
                </h4>
                <h4 className="mb-2 font-semibold">
                  ₹{item.card.info.price / 100}
                </h4>
                <p>{item.card.info.description}</p>
              </div>
              <div>
                <img
                  className="w-40 rounded"
                  src={CDN_URL + item.card.info.imageId}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
