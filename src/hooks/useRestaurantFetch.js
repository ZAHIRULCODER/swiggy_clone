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
	} = useContext(RestaurantContext);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(FETCH_RESTAURANTS, {
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json",
					},
				});

				const restaurants =
					response?.data?.data?.cards[5]?.card?.card?.gridElements
						?.infoWithStyle?.restaurants;

				//Optional Chaining
				setAllRestaurants(restaurants);

				setFilteredRestaurant(restaurants);

				// console.log(
				// 	response?.data?.data?.cards[5]?.card?.card?.gridElements
				// 		?.infoWithStyle?.restaurants
				// );
			} catch (error) {
				console.log(`Failed to Fetch Restaurant: ${error}`);
			}
		})();
	}, []);

	return { allRestaurants, filteredRestaurant };
};
