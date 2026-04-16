import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../store/cartSlice";

const ItemCards = ({item}) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {item.map((c) => (
        <div
          className="flex justify-between items-center border border-transparent px-3 py-7 not-last:border-b-gray-300"
          key={c.card.info.id}
        >
          <div>
            <h4 className="mb-0 font-semibold">{c.card.info.name}</h4>
            <h4 className="mb-2 font-semibold">₹{c.card.info.price / 100}</h4>
            <p>{c.card.info.description}</p>
          </div>
          <div className="relative">
            <img className="w-40 rounded" src={CDN_URL + c.card.info.imageId} />
            <button className="border border-green-600 text-green-600 bg-white py-1 w-25 rounded absolute left-1/2 -translate-1/2 cursor-pointer"
              onClick={() => handleAddItem(c)}>
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
