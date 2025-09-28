import { useContext, useState, useEffect } from "react";
import RestaurantContext from "../context/RestaurantContext";
import { filterData } from "../utils/helperFunc";

export function Search() {
   const [searchText, setSearchText] = useState("");
   const { allRestaurants, setFilteredRestaurant } =
      useContext(RestaurantContext);

   useEffect(() => {
      const data = filterData(searchText, allRestaurants);
      setFilteredRestaurant(data);
   }, [searchText, allRestaurants, setFilteredRestaurant]);

   return (
      <div className="flex mx-auto items-center">
         <input
            className="w-[400px] border p-2 rounded-lg focus:outline-none"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants"
         />
      </div>
   );
}
