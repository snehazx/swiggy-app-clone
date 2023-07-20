// import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Menu = () => {
    const [resinfo,setresinfo] = useState(null);
    // const resid = useParams();
    const {resid} = useParams();
    const useEffect =(() => fetchMenu(),[]);
    
    // const useEffect =(() =>{
    //     fetchMenu();}, []);
    //  const useEffect =(() => {fetchMenu();},[]);
     const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7381596&lng=77.133674&restaurantId=" + resid);
        const json = await data.json();

        setresinfo(json.data);}
     


     const{name,costfortwo,cuisines} =  resinfo?.cards[0].card?.card?.info;
//   const {itemcards}  = data?.cards[2]?.GroupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   card.card.dishes.name
//   card?.card?.gridElements?.infoWithStyle?.offers?.
//    card.info.name
// dishes.info.name
return(

    <div>
   <h1>{name}</h1> 
    <p>{cuisines}</p>
   <h2>{costfortwo}</h2>
   <h4>MENU</h4>
   {/* <h3>{itemcards.map((item) => item.dishes.info.name)} */}
   {/* </h3> */}
     
    </div>
   );



;}
 export default Menu;