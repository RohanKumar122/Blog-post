import { useState } from "react";
import { Link } from "react-router-dom";
const Heading = () => {
const [login, setLogin] = useState("Login");

const onlineStatus = useonlineStatus();
const handleLoginClick = () => {
  setLogin((prevLogin) => (prevLogin === "Login" ? "Logout" : "Login"));
};

  return (
    <div className="heading-main">
      <img className="logo" src={burgerImg} alt="Burger" />
      <ul className="heading-list">
        <li>
          <span
            className={`status ${onlineStatus ? "online" : "offline"}`}
          ></span>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
        <li>
          <Link to="Grocery">Grocery</Link>
        </li>
        <li>Cart</li>
        <li id="login" onClick={handleLoginClick}>
          {login}
        </li>
      </ul>
    </div>
  );
};

export default Heading;
