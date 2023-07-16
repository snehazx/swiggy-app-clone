import React from "react";
import  ReactDOM  from "react";
import Restaurantcard from "./Restrauntcard";
import resobj from "./resobj";
const  Body = () =>{
    return(
     <div className="body">
      <div className="search">search</div>
       <div className="res-container">
         <Restaurantcard index ={key} props = {resobj}/>
         {/* <Restaurantcard/>
         <Restaurantcard/>
         <Restaurantcard/>
         <Restaurantcard/>
         <Restaurantcard/> */}
       </div>
     </div>)
  
  }
  export default Body;