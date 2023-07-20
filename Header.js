import React, { useState } from "react";
import  ReactDOM  from "react";
import "../swiggy/index.css";
import {CDN_URL} from "./utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("login");
  
  return(
   
      <div className="header ">
    <div className="logo-container">
    <img
     className="logo"
     src ={CDN_URL}
    />
     </div>
    <div className="nav-item">
    <ul>
    <button  className ="login" onClick={() => {
     btnNameReact ==="login"?
      
      setBtnNameReact("logout"):
      setBtnNameReact("login");

      }}
  >
    {btnNameReact}
    </button>
   <Link to ="/">hom </Link>
   <Link to ="/About" >about</Link>
    <Link to ="/Contact">contact</Link>
    <Link to ="/">cart</Link>

    <Link to ="/restaurant/:resid"></Link>
    <li>Cart</li>
    </ul>
    </div>
    </div>
  );
  };
  export default Header;