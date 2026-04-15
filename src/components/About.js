import FoodList from "./FoodList";
import Search from "./Search";
import { FOODS } from "../utils/constants";
import { useState } from "react";

const About = () => {
  const [foodList, setFoodList] = useState(FOODS);

  const handleChange = (value) => {
    console.log(value);
    setFoodList(
      foodList.filter((food) =>
        food.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  return (
    <div className="m-5">
      <Search onChange={handleChange} />
      <hr />
      <FoodList item={foodList} />
    </div>
  );
};

export default About;