import { useContext, useState } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log("logged in user", loggedInUser);

  // Subscrbing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("cart items",cartItems);

  return (
    <div className="flex justify-between items-center shadow-lg">
      <Link to="/">
      <div className="flex">
        <img className="w-32" data-testid="logo" src={Logo} alt="logo" />
        <h1 className="flex items-center justify-center text-2xl font-bold">
          YumRush
        </h1>
      </div>
      </Link>
      <div className="flex">
        <ul className="flex list-none px-20 font-bold">
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5"> 
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="px-5">
            <Link to="/grocery">Grocery </Link>
          </li> */}
          <li className="px-5">
            <Link to="/cart"> Cart ({cartItems.length} items)</Link>
          </li>
          {onlineStatus ? (
            <li className="text-green-700 px-5">Online</li>
          ) : (
            <li className="text-red-700 px-5">Offline</li>
          )}
          {/* <button
          data-testid = "button"
            className="login-btn"
            onClick={() => {
              buttonName == "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button> */}
          <li className="px-5">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
