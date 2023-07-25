// import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
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
    resinfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card
      ?.card?.itemCards;

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
    <div>
   <h1>{name}</h1> 
    <p>{cuisines}</p>
   <h2>{costfortwo}</h2>

   <ul>
   {menuCards.map((item) => 
   <li key={item.card.info.id}>
   {item.card.info.name}
   </li>)}

   </ul>
    </div>
   );
;}
 export default Menu;