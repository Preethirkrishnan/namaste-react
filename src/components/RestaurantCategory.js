import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RestaurantCategory = ({ item }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className="bg-gray-50 rounded shadow-md p-4 mb-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsCollapse(prev => !prev)}
      >
        <h3 className="font-bold text-xl">
          {item.title} ({item.itemCards.length})
        </h3>
        {isCollapse ? <FaChevronDown /> : <FaChevronUp />}
      </div>

      {!isCollapse && (
        <div>
          {item.itemCards.map((c) => (
            <div
              className="flex justify-between items-center border border-transparent px-3 py-7 not-last:border-b-gray-300"
              key={c.card.info.id}
            >
              <div>
                <h4 className="mb-0 font-semibold">{c.card.info.name}</h4>
                <h4 className="mb-2 font-semibold">
                  ₹{c.card.info.price / 100}
                </h4>
                <p>{c.card.info.description}</p>
              </div>
              <div className="relative">
                <img
                  className="w-40 rounded"
                  src={CDN_URL + c.card.info.imageId}
                />
                <button className="border border-green-600 text-green-600 bg-white py-1 w-25 rounded absolute left-1/2 -translate-1/2 cursor-pointer">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
