// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {menu_api} from "./constants";
import { useState } from "react";
const useRestaurantMenu =(resid) =>{

const [resinfo,setresinfo] = useState([]);  
// const {resid} = useParams();
useEffect(() => {
    fetchMenu();
}, []);
const fetchMenu = async () => {
    
    const data = await fetch( menu_api + resid);
     const json = await data.json();
     setresinfo(json.data);};
     return resinfo;  
}

export default useRestaurantMenu;

//     const [resinfo,setresinfo] = useState([]);  

//     useEffect(() => {
//         fetchMenu();
//     }, []);

//     const fetchMenu = async () => {
//         const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=10208 ");
//         const json = await data.json();
//         setresinfo(json.data);}
//     return resinfo
// }

 
