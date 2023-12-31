import React, { useEffect, useState } from "react";
import Restaurantcard,{withpromotedlabel} from "./Restaurantcard";
import { useState } from "react";
import { useEffect } from "react";
// import {res_api} from "../utilities/constants";
import { Link } from "react-router-dom";
const  Body = () =>{
  console.log();
  const [restrauntlist,setrestrauntlist] = useState([]);
  const [searchtext, setSearchtext]    = useState("");
  const [filteredrestraunt,setFilteredrestraunt]  = useState([]);
  // const RestaurantcardPromoted  = withpromotedlabel(Restaurantcard);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&page_type=DESKTOP_WEB_LISTING'
        )
        const json = await response.json()
        const restaurants =
          json?.data?.cards.filter(res => res?.cardType === 'seeAllRestaurants')?.[0]?.data?.data?.cards ||
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

          setrestrauntlist(restaurants)
          setFilteredrestraunt(restaurants)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])



// useEffect(() => {
//   fetchdata()
// } , [] );
//   const fetchdata = async () =>{
//    const data = await fetch(res_api);
//    const json = await data.json();
//      setrestrauntlist(json?.data?.cards[2]?.data?.data?.cards);
//      setFilteredrestraunt(json?.data?.cards[2]?.data?.data?.cards);};
  //  if(!filteredrestraunt ){  <h1>Loading.......</h1> }

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
                 setFilteredrestraunt(filteredlist); } }> search </button></div>
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

 <div className="flex-wrap flex">
 { filteredrestraunt.map((restaurant) =>
 <Link
 key={restaurant.info.id}
 to={"/restaurant/"+ restaurant.info.id}
 >
  <Restaurantcard data={...restaurant.info}/>
 </Link>)
 } 


</div>
</div>
</React.Fragment>)}
 export default Body;

       {/* <div className=" flex-wrap flex">
         {  filteredrestraunt.map((restaurant) =>(
                   <Link 
         key ={restaurant.data.id}
         to = {"/restaurant/" + restaurant.data.id} 
         >
           <Restaurantcard   data= {...restaurant.data}/> */}

         {/* {restaurant.data.Promoted?
          (<RestaurantcardPromoted  data ={...restaurant.data} /> )   :  (<Restaurantcard   data ={...restaurant.data}   />)
         } */}
         {/* </Link> */}
        
       {/* </div>   */}
       {/* </div> */}
     {/* </React.Fragment>)}} */}

    
