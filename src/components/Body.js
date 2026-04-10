import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

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
        .restaurants,
    );
    setFilteredRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants,
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            className="search-box"
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
          className="rated-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
