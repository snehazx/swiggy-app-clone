import React from "react";
import  ReactDOM  from "react";
import resobj from "./resobj";
import Body from "./Body";
const Restaurantcard = (props) =>{
    const {resdata} = props;
    const{
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating
    }   = resdata?.data;
    return(
     <div className="res-card" >
     
     <img alt="res-logo" className="res-logo" src ="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/adae3e56e1995f73e96dbefca906bfa7"/>
     <h1>{props.name}</h1>
     <h2>{props.cuisine}</h2>
     <h3>{props.avgrating}</h3>
     <h4>{props.deliveryTime}</h4>
     <h5>{"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rmnzl74nmlldrsv9bnvkcloudinaryImageId" }</h5>
     <h6>{props.costForTwo}</h6>
     </div>
    )
  }
  export default Restaurantcard;
  