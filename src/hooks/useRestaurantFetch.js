import axios from "axios";
import { useContext, useEffect } from "react";
import RestaurantContext from "../context/RestaurantContext";
import { FETCH_RESTAURANTS } from "../constant";

export const useRestaurantFetch = () => {
   const {
      allRestaurants,
      setAllRestaurants,
      filteredRestaurant,
      setFilteredRestaurant,
      loading,
      setLoading,
   } = useContext(RestaurantContext);

   useEffect(() => {
      (async () => {
         try {
            setLoading(true);
            const response = await axios.get(FETCH_RESTAURANTS);
            const restaurants =
               response?.data?.data?.cards[4]?.card?.card?.gridElements
                  ?.infoWithStyle?.restaurants;
            setAllRestaurants(restaurants);
            setFilteredRestaurant(restaurants);
            setLoading(false);
         } catch (error) {
            console.log(`Failed to Fetch Restaurant: ${error}`);
            setLoading(false);
         }
      })();
   }, []);

   return { allRestaurants, filteredRestaurant, loading };
};
