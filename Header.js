import React from "react";
import  ReactDOM  from "react";
import "../swiggy/index.css"
const Header = () => { return(
    <div className="header ">
    <div className="logo-container">
    <img
     className="logo"
     src ="https://cdn2.vectorstock.com/i/1000x1000/02/61/restaurant-cafe-logo-menu-dish-food-vector-8420261.jpg"
    />
     </div>
    <div className="nav-item">
    <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
    </ul>
    </div>
    </div>
  );
  };
  export default Header;