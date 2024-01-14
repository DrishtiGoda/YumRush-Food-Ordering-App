import { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <img className="w-32" src={logo} alt="logo" />
        <h1>YumRush</h1>
      </div>
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
          <li className="px-5">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-5">Cart</li>
          {onlineStatus ? (
            <li className="text-green-700 px-5">Online</li>
          ) : (
            <li className="text-red-700 px-5">Offline</li>
          )}
          <button
            className="login-btn"
            onClick={() => {
              buttonName == "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
