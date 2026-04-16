import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ item, showItems, setShowIndex }) => {

  return (
    <div className="bg-gray-50 rounded shadow-md p-4 mb-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowIndex()}
      >
        <h3 className="font-bold text-lg">
          {item.title} ({item.itemCards.length})
        </h3>
        {showItems ? <FaChevronDown /> : <FaChevronUp />}
      </div>

      {showItems && (
        <ItemCards item={item.itemCards} />
      )}
    </div>
  );
};

export default RestaurantCategory;