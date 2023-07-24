import React, { useState } from "react";
import  ReactDOM  from "react";
import "../swiggy/index.css";
import {CDN_URL} from "./utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("login");
  const  onlineStatus= useOnlineStatus();

  return(
   
      <div className="header ">
    <div className="logo-container">
    <img
     className="logo"
     src ={CDN_URL}
    />
     </div>
    <div className="nav-item">
  
    <button  className ="login" onClick={() => {
     btnNameReact ==="login"?
      
      setBtnNameReact("logout"):
      setBtnNameReact("login");

      }}
  >
    {btnNameReact}
    </button>
    <ul>
    <li>onlineStatus { onlineStatus?" ********** ": " *  " }</li>
    <li><Link to ="/">hom </Link></li>
     <li><Link to ="/About" >about</Link></li>
    <li> <Link to ="/Contact">contact</Link></li>
    <li> <Link to ="/">cart</Link></li>
    {/* <li> <Link to ="/restaurant/:resid"></Link></li> */}
   
   
   
   

   
   
    </ul>
    </div>
    </div>
  );
  };
  export default Header;