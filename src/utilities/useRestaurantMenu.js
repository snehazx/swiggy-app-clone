import { useEffect, useState } from "react";
import { menu_api } from "./constants";
const useRestaurantMenu = (id) => {
  const [resDetails, setResDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      const menuAPIURL = `${menu_api}${id}`;
      const response = await fetch(menuAPIURL);
      const json = await response.json();
      setResDetails(json?.data?.cards);
    }
    fetchData();
  }, []);

  const menuItemCards =
    resDetails?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return { resDetails, menuItemCards };
};
export default useRestaurantMenu;
