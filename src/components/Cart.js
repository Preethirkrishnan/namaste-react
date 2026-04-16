import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { LiaTimesSolid } from "react-icons/lia";
import { cartClear } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(cartClear());
  }

  return (
    <div className="w-6/12 mx-auto my-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold mb-0">Cart</h1>
        <button className="bg-gray-200 border-gray-700 py-1 px-3 rounded cursor-pointer hover:bg-gray-300 flex gap-1 items-center"
            onClick={handleClearCart}>
          <LiaTimesSolid className="text-sm" /> Clear Cart
        </button>
      </div>

      {cartItems.length === 0 && <h1>The cart is empty. Add items to the cart!</h1>}
      <ItemCards item={cartItems} />
    </div>
  );
};

export default Cart;
