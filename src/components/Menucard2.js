import Itemlist from "./Itemlist";
import {menuItemCards} from "../utilities/useRestaurantMenu";
import React from "react";
import Itemlist from "./Itemlist";
const Menucard2 = (data) => {
  return
   (
   <div>
   <div  className="w=6/12 mx-auto my-4 justify-between bg-gray-50 shadow-lg p-4">
   <span className="font-bold text-lg">{data.title} {data.itemCards.length}</span>
   <span>⬇️</span>
   </div>
   {menuItemCards?.card?.card?.card?.itemCards.map((itemCard) => (
    <Itemlist
      key={itemCard?.card?.info?.id}
      info={itemCard?.card?.info}
    />
  ))}
  </div>
   );
  
};
export default Menucard2;
