import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { RES_MENU_URL } from "../utils/constants";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  const [resDetails, setResDetails] = useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(RES_MENU_URL + params.resId);

    const json = await data.json();
    setResDetails(json?.data);
  };

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
    <div className="res-menu-container">
      <Link to="/">Back To Restaurants</Link>
      <h1>{name}</h1>
      <div className="card">
        <h4>
          {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{sla.slaString}</h5>
      </div>

      {categories.map((cat, index) => (
        <div key={index}>
          <h3>
            {cat.title} ({cat.itemCards.length})
          </h3>
          {cat.itemCards.map((item) => (
            <div className="card flex" key={item.card.info.id}>
              <div>
                <h4 className="mb-0">{item.card.info.name}</h4>
                <h4 className="mt-10">₹{item.card.info.price / 100}</h4>
                <p>{item.card.info.description}</p>
              </div>
              <div>
                <img src={CDN_URL + item.card.info.imageId} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
