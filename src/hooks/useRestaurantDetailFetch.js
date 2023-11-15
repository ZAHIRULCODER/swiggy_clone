import axios from "axios";
import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_DETAILS } from "../constant";

export const useRestaurantFetch = (resId) => {
	const [restaurantDetails, setRestaurantDetails] = useState([]);
	const [recommended, setRecommended] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(FETCH_RESTAURANT_DETAILS + resId, {
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json",
					},
				});

				const restaurantDets = response?.data?.data?.cards[0]?.card?.card?.info;
				const recommend =
					response?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
						?.cards;

				setRestaurantDetails(restaurantDets);
				setRecommended(recommend);

				// console.log(
				// 	response?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
				// 		?.cards
				// );
			} catch (error) {
				console.log(`Failed to Fetch Restaurant Details: ${error}`);
			}
		})();
	}, []);

	return { restaurantDetails, recommended };
};
