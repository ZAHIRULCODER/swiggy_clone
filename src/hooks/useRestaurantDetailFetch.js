import axios from "axios";
import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_DETAILS } from "../constant";

export const useRestaurantDetailFetch = (resId) => {
	const [restaurantDetails, setRestaurantDetails] = useState([]);
	const [recommended, setRecommended] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`${FETCH_RESTAURANT_DETAILS}&restaurantId=${resId}`
				);
				const restaurantDets = response?.data?.data?.cards[2]?.card?.card?.info;
				const recommend =
					response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
						?.cards;

				setRestaurantDetails(restaurantDets);
				setRecommended(recommend);
			} catch (error) {
				console.log(`Failed to Fetch Restaurant Details: ${error}`);
			}
		})();
	}, []);

	return { restaurantDetails, recommended };
};
