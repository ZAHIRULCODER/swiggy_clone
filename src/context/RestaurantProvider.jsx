import { useState } from "react";
import RestaurantContext from "./RestaurantContext";

const RestaurantProvider = ({ children }) => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [loading, setLoading] = useState(false);
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
				loading,
				setLoading,
			}}>
			{children}
		</RestaurantContext.Provider>
	);
};

export default RestaurantProvider;
