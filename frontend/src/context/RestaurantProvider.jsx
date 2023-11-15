import { useState } from "react";
import RestaurantContext from "./RestaurantContext";

const RestaurantProvider = ({ children }) => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [pageOffset, setPageOffset] = useState(null);

	return (
		<RestaurantContext.Provider
			value={{
				allRestaurants,
				setAllRestaurants,
				filteredRestaurant,
				setFilteredRestaurant,
				pageOffset,
				setPageOffset,
			}}>
			{children}
		</RestaurantContext.Provider>
	);
};

export default RestaurantProvider;
