import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // const arr = useState();
  // const [res, setRes] = arr;
  // const res = arr[0];
  // const setRes = arr[1];

  //Local State variable - super powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    //optional chaining
    setListOfRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const onlineStatus = useOnlineStatus();

  if(!onlineStatus) return <h1>Looks like you're offline!! Please check your internet connection.</h1>

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="py-4 px-10">
      <div className="flex gap-4 mb-4">
        <div>
          <input
            type="text"
            className="border border-gray-400 p-2 rounded focus:outline-none focus:ring focus:ring-blue-600"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setFilteredRestaurants(listOfRestaurants);
              }
              setSearchText(value);
            }}
          />
          <button
            className="p-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer ml-2 rounded"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="p-2 border border-blue-600 text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className=""
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;