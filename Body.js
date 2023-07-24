import React, { useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";
// import resobj from "./resobj";
// import Resobj from "./Resobj";
import { useState } from "react";
import { useEffect } from "react";
import {total_list} from "./utils/constants";
import { Link } from "react-router-dom";
const  Body = () =>{
  const [restrauntlist,setrestrauntlist] = useState([]);
  const [searchtext, setSearchtext]    = useState("");
  const [filteredrestraunt,setFilteredrestraunt]  = useState([]);
  
useEffect(() => {
  fetchdata()
} , [] );
 
  const fetchdata = async () =>{
   const data = await fetch(total_list);
   const json = await data.json();
     setrestrauntlist(json?.data?.cards[2]?.data?.data?.cards);
     setFilteredrestraunt(json?.data?.cards[2]?.data?.data?.cards);
  };
    return( <React.Fragment>
     <div className="body">
      <div className="search">           
            <input
               type ="text"
               className="search"
               value={searchtext}
               onChange={(e) => {setSearchtext(e.target.value);}} /> 
           <button  onClick = { () =>
             {    const filteredlist =
                restrauntlist.filter((res) =>
                res.data.name.toLowerCase().includes(searchtext.toLowerCase()));
                 setFilteredrestraunt(filteredlist); } }>search</button>
      </div>
      <button className="filter-btn"
      onClick ={()  =>{
           const filteredrestraunt = restrauntlist.filter 
           ((res) => res.data.avgRating > 4 );
           setFilteredrestraunt(filteredrestraunt);
      }}>
      Top Rated Restraunt</button>
       <div className="res-container">
         {  filteredrestraunt.map((item) =>
         <Link 
         key ={restaurant.data.id}
         to = {"/restaurant/" + restaurant.data.id} 
         > <Restaurantcard  data ={...item.data}      />
         </Link> )}        
       </div>  
       </div>
     </React.Fragment>)}
  export default Body;

