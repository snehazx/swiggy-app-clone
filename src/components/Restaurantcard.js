import React from "react";
import Resobj from "./Resobj";
import Body from "./Body";
import {cloud_img} from "../utilities/constants";
const Restaurantcard = (props) =>{
  console.log();
    const {data} = props
    if (!data) {
      return null;
    }
    const{
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
    cloudinaryImageId
    }   = data;
    return(
     <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300 " >
       {/* <img
          alt="res-logo"
          className="res-logo"
          src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +cloudinaryImageId }
        /> */}
     <img alt="res-logo" 
     className="rounded-lg"
      src ={ cloud_img + cloudinaryImageId} />
     <h1 className="font-bold text-sm px-4">{name}</h1>
     <h2>{cuisines.join(",")}</h2>
     <h3>{avgRating}</h3>
     <h4>{deliveryTime}</h4>
     {/* <h5>{"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rmnzl74nmlldrsv9bnvkcloudinaryImageId" }</h5> */}
     <h6>{costForTwo}</h6>
     </div>
    )
  };
  export default Restaurantcard;

//   export const withpromotedlabel =(Restaurantcard)=>{
//   return(props) =>{
//   return(
//  <div>
// <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted   </label>
// <Restaurantcard  {...props}/>
//  </div>
//   )
//   }
//   };


  