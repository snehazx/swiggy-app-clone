import React from "react";
// import  ReactDOM  from "react";
// import resobj from "./resobj";
// import Body from "./Body";
import Resobj from "./Resobj";
import Body from "./Body";
import {cloud_img} from "./utils/constants"
const Restaurantcard = (props) =>{
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
     <div className="res-card" >
       {/* <img
          alt="res-logo"
          className="res-logo"
          src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +cloudinaryImageId }
        /> */}
     <img alt="res-logo" 
     className="res-logo"
      src ={ cloud_img + cloudinaryImageId} />
     <h1>{name}</h1>
     <h2>{cuisines.join(",")}</h2>
     <h3>{avgRating}</h3>
     <h4>{deliveryTime}</h4>
     {/* <h5>{"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rmnzl74nmlldrsv9bnvkcloudinaryImageId" }</h5> */}
     <h6>{costForTwo}</h6>
     </div>
    )
  }
  export default Restaurantcard;
  