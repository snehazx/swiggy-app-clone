

import { useState } from "react";
import Itemlist from "./Itemlist";
const Menucard2 = ({data, showItems,setShowIndex}) => {

  // const [showItems,setShowItems] = useState(false);
  const handleClick = () => {
     setShowIndex() ;
  }
//  console.log(data);
  return (
   
    <div>
      <div className="w=6/12 mx-auto my-4 justify-between bg-gray-50 shadow-lg p-4">
        <div className="cursor-pointer " onClick= {handleClick} >
        <span className="font-bold text-lg" >
          {data?.title}  ({data?.itemCards?.length})
        </span>  
      <span>⬇️</span>
      </div>
        {showItems &&    data?.itemCards?.map((itemCard) => (
        <Itemlist key={itemCard?.card?.info?.id}   info={itemCard?.card?.info} /> 
      )) }
      </div>
     
    </div>
  );
};
export default Menucard2;
