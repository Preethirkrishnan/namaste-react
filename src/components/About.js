import FoodList from "./FoodList";
import Search from "./Search";
import { FOODS } from "../utils/constants";
import { useState } from "react";

const About = () => {
  const [foodList, setFoodList] = useState(FOODS);
  const [searchText, setSearchText] = useState("");

  const handleChange = (value) => {
    setSearchText(value);
    setFoodList(
      FOODS.filter((food) =>
        food.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  return (
    <div className="m-5">
      <Search value={searchText} onChange={handleChange} />
      <hr />
      <FoodList item={foodList} />
    </div>
  );
};

export default About;