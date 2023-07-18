import React, { useEffect, useState } from "react";
// import  ReactDOM  from "react";
import Restaurantcard from "./Restrauntcard";
// import resobj from "./resobj";
// import Resobj from "./Resobj";
import { useState } from "react";
import { useEffect } from "react";


const [restrauntlist,setrestrauntlist] = useState([]);


useEffect(() => {
  fetchdata()
} , [] );
 
  const fetchdata = async () =>{
   const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.73826769999999&lng=77.0822151&page_type=DESKTOP_WEB_LISTING"

   );
   const json = await data.json();


  };

const  Body = () =>{
    return(
     <div className="body">
      <button className="search"
      onClick ={()  =>{
           const filteredrestraunt = restrauntlist.filter 
           ((res) => res.data.avgRating > 4 );
           setrestrauntlist(filteredrestraunt);
      }}>search</button>
       <div className="res-container">
         {  restrauntlist.map((item) =>
          <Restaurantcard  key ={item.data.uuid} data ={...item.data}      />
         )}        
       </div>
     </div>)
  
  }
  export default Body;