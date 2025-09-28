import { useContext, useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
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
      <label className="group relative flex w-full items-center rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2 text-sm shadow-sm shadow-slate-900/5 transition focus-within:border-orange-300 focus-within:ring-4 focus-within:ring-orange-100">
         <FiSearch className="ml-1 text-lg text-slate-400 transition group-focus-within:text-orange-500" />
         <input
            className="ml-2 w-full border-none bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants, cuisines, or dishes"
            aria-label="Search restaurants"
         />
         {searchText && (
            <button
               type="button"
               onClick={() => setSearchText("")}
               className="mr-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500 transition hover:bg-slate-200 hover:text-slate-700"
               aria-label="Clear search"
            >
               ×
            </button>
         )}
      </label>
   );
}
