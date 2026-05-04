import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a Selector hook
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center py-3 px-10 shadow-md sticky top-0 z-1 bg-white">
      <div>
        <img className="w-17" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex items-center gap-6">
          <li>
            <span className="text-gray-500 text-sm">Online Status: </span>
            {onlineStatus ? (
              <span className="text-green-700 font-medium">Active</span>
            ) : (
              <span className="text-red-700">Offline</span>
            )}
          </li>
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-blue-600">
              Grocery
            </Link>
          </li>
          <li className="font-semibold relative">
            <Link to="/cart">
              <FaShoppingCart />{" "}
              <span className="absolute -top-2 -right-3 w-4 h-4 flex justify-center items-center text-xs shadow bg-red-600 rounded-full text-white">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <button
            className="py-2 px-4 rounded border border-blue-600 text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
