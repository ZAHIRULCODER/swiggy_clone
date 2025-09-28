import { useContext, useState } from "react";
import RestaurantContext from "../context/RestaurantContext";
import { filterData } from "../utils/helperFunc";

export function Search() {
   const [searchText, setSearchText] = useState("");
   const { allRestaurants, setFilteredRestaurant } =
      useContext(RestaurantContext);

   return (
      <div className="flex mx-auto items-center space-x-1">
         <input
            className="w-[350px] border p-2 rounded-l-lg focus:outline-none"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants"
         />
         <button
            onClick={() => {
               //need to filter data
               const data = filterData(searchText, allRestaurants);
               //update the state - restaurants
               setFilteredRestaurant(data);
               setSearchText("");
            }}
            className="bg-slate-600 text-white p-2 rounded-r-lg hover:bg-black focus:outline-none"
            type="submit"
         >
            Search
         </button>
      </div>
   );
}
