import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import Menucard2 from "./Menucard2";
const Menu2 =()=>{
   const {resid} = useParams();
 const { resDetails, menuItemCards } = useRestaurantMenu(resid);
 const {
    name,
    areaName,
    costForTwoMessage,
    avgRatingString,
    cuisines,
    totalRatingsString,
  } = resDetails?.[0]?.card?.card?.info || {};
  return(
  <div className="text-center">
  <h1 className="font-bold my-10">{name}</h1>
 <p>
    {cuisines.join(",")} - {costForTwoMessage}
 </p>
 {menuItemCards?.map((card) => <Menucard2  data={card?.card?.card}  />)}
 {/* {card?.card?.card?.itemCards.map((itemCard) => (
                    <MenuCard
                      key={itemCard?.card?.info?.id}
                      info={itemCard?.card?.info}
                    />  ))} */}
  </div>
  );
}
export default Menu2;