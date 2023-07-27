// import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import Restaurantcard from "./Restaurantcard";
// import Restaurantcategory from "./Restaurantcategory";
// import { menu_link } from "./utils/constants";
const Menu = () => {
    //    const [resinfo,setresinfo] = useState([]);  
        const {resid} = useParams();
   
    const resinfo = useRestaurantMenu(resid);
        if(resinfo.length===0){return <shimmer/>}  
   
          const{ name,cuisines,costfortwo } =  resinfo?.cards[0]?.card?.card?.info || {};
        //   const  {itemCards}  = resinfo?.cards[2]?.GroupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
//           if(!itemCards){
//             return<h1>Loading...<h1>;
// }   
const menuCards =
    resinfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card ?.card?.itemCards;

    // const menuCards =resinfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>  c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    
    
    
   
// const menuItemCards =
// resinfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//   (card) =>
//     card?.card?.card?.["@type"] ==
//     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
// );
        {/* //   const { itemCards}  = resinfo?.cards[2]?.GroupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; */}
    //     const {itemCards} =
    // resinfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    //   (card) =>
    //     card?.card?.card?.["@type"] ==
    //     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    // ).card?.card;
return(
    <div className="text-center">
   <h1 className="font-bold my-6 text-2xl">{name}</h1> 
    <p className="font-bold text-lg">{cuisines.join(",")}- {costfortwo}</p>
   

{ menuCards.map((item) =>  {item.card.info.name}  )}
  
   {/* {menuCards.map((item) => (<Restaurantcategory data= {category?.card?.card}/>))} */}
    </div>
   );
;}
 export default Menu;
 
   {/* <li key={item.card.info.id}>

   {item.card.info.name} */}
   {/* </li> */}