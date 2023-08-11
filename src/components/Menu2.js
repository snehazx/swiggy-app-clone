import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import Menucard2 from "./Menucard2";
import { useState } from "react";
const Menu2 =()=>{
   const {resid} = useParams();
 const { resDetails, menuItemCards } = useRestaurantMenu(resid);
 const [showIndex,setShowIndex] = useState(0);
 const {
    name,
    areaName,
    costForTwoMessage,
    avgRatingString,
    cuisines,
    totalRatingsString,
  } = resDetails?.[0]?.card?.card?.info || {};
  return (
    <div className="text-center">
      <h1 className="font-bold my-10">{name}</h1>
      <p> {cuisines?.join(",")} - {costForTwoMessage}    </p>
      {menuItemCards?.map((card,index) => (
        <Menucard2 data={card?.card?.card} 
        key={card?.card?.card?.id}
        showItems={ index === showIndex ? true : false} 
        setShowIndex={() =>   setShowIndex(index)} /> ))}
      {/* {card?.card?.card?.itemCards.map((itemCard) => (
                    <MenuCard
                      key={itemCard?.card?.info?.id}
                      info={itemCard?.card?.info}
                    />  ))} */}
    </div>
  );
}
export default Menu2;