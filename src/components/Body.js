import React, { useEffect, useState } from "react";
import Restaurantcard,{withpromotedlabel} from "./Restaurantcard";
import { useState } from "react";
import { useEffect } from "react";
import {res_api} from "../utilities/constants";
import { Link } from "react-router-dom";
const  Body = () =>{
  const [restrauntlist,setrestrauntlist] = useState([]);
  const [searchtext, setSearchtext]    = useState("");
  const [filteredrestraunt,setFilteredrestraunt]  = useState([]);

  const RestaurantcardPromoted  = withpromotedlabel(Restaurantcard);

 
useEffect(() => {
  fetchdata()
} , [] );
 
  const fetchdata = async () =>{
   const data = await fetch(res_api);
   const json = await data.json();
     setrestrauntlist(json?.data?.cards[2]?.data?.data?.cards);
     setFilteredrestraunt(json?.data?.cards[2]?.data?.data?.cards);
  };
   if(!filteredrestraunt ){  <h1>Loading.......</h1> }
else{
    return( <React.Fragment>
     <div className="body">
      <div  className=" flex">
      <div className="search m-4 p-4">           
            <input
               type ="text"
               className="border border-solid border-black"
               value={searchtext}
               onChange={(e) => {setSearchtext(e.target.value);}} /> 


           <button  className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
            onClick = { () =>
             {    const filteredlist =
                restrauntlist.filter((res) =>
                res.data.name.toLowerCase().includes(searchtext.toLowerCase()));
                 setFilteredrestraunt(filteredlist); } }> search </button>
            </div>

        <div  className="search m-4 p-4 flex items-center" >
      <button className="  px-4 py-2 bg-gray-100 rounded-lg "
      onClick ={()  =>{
           const filteredrestraunt = restrauntlist.filter 
           ((res) => res.data.avgRating > 4 );
           setFilteredrestraunt(filteredrestraunt);
      }}>
      Top Rated Restraunt</button>
      </div>
      </div>


       <div className=" flex-wrap flex">
         {  filteredrestraunt.map((restaurant) =>(
                   <Link 
         key ={restaurant.data.id}
         to = {"/restaurant/" + restaurant.data.id} 
         >
         {restaurant.data.Promoted ?
          (<RestaurantcardPromoted  data ={...restaurant.data} /> )   :  (<Restaurantcard   data ={...restaurant.data}   />)
         }
         </Link>) )}       
       </div>  
       </div>
     </React.Fragment>)}}
  export default Body;

