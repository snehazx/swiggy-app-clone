import React, { useState } from "react";
import  ReactDOM  from "react";
import "../../index.css";
import {CDN_URL} from "../utilities/constants";
import { useSelector } from "react-redux";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import userName from "../utilities/userName";
const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("login");
  const  status= useOnlineStatus();
  const {loginuser} = useContext(userName);
  // subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return(  <div className="flex justify-between bg-pink-100 shadow-lg ">
    <div className="logo-container">
    <img
     className="w-20"
     src ={CDN_URL} /> </div>
    <div className="flex items-center">
    <ul className="flex m-4 p-4">
    <li className="px-4"> { status?"online 🟢": "offline 🔴" }</li>
    <li  className="px-4"><Link to ="/">home </Link></li>
     <li  className="px-4"><Link to ="/About" >about</Link></li>
    <li  className="px-4"> <Link to ="/Contact">contact</Link></li>
    <li  className="px-4"> <Link to ="/">cart</Link></li>
    <li  className="px-4"> <Link to ="/Grocery">Grocery</Link></li>
   
    <button  className ="login border-2 px-4 py-2 rounded-lg bg-gray-100 border-black " onClick={() => {
     btnNameReact ==="login"?
      
      setBtnNameReact("logout"):
      setBtnNameReact("login"); }}>
    {btnNameReact}
    </button>
    <li  className="px-4 font-bold"> {loginuser}</li>
    <li  className="px-4 font-bold"><Link to ="/cart">Cart 🛒 ({cartItems.length})</Link></li>
    </ul>
    </div>
    </div>
  );
  };
  export default Header;