import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus/useOnlineStatus";
import { useSelector } from "react-redux";

const HeadingComponent = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [btnClassName, setBtnClassName] = useState("login-btn");
  const onlineStatus = useOnlineStatus();
  const ChangeBtn = (e) => {
    if (e.target.innerText == "Login") {
      setBtnNameReact("Logout");
      setBtnClassName("logout-btn");
    } else {
      setBtnNameReact("Login");
      setBtnClassName("login-btn");
    }
  };

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div>
      <nav className="nav ">
        {/* <Link className="online-status" style={{ textDecoration: "none" }}>
          {onlineStatus ? "🔴" : "⚪"}
        </Link> */}
        <Link to="/" className="logo">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/25539c29532269.55f7d6a0a8c71.jpg" />
        </Link>
        <div className="nav__link">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/cart">Cart({cartItems.length})items</Link>
          <Link to="/login">
            <button className={btnClassName} onClick={ChangeBtn}>
              {btnNameReact}
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HeadingComponent;
