export const filterData = (searchText, restaurants) => {
	// Normalize the searchText by removing spaces and converting to lowercase
	const normalizedSearchText = searchText.replace(/\s/g, "").toLowerCase();

	// Create a regex from the normalizedSearchText, with case-insensitive flag 'i'
	const regex = new RegExp(normalizedSearchText, "i");

	return restaurants.filter((restaurant) => {
		// Normalize the restaurant name
		const normalizedRestaurantName = restaurant?.info?.name
			.replace(/\s/g, "")
			.toLowerCase();

		// Test if the normalized restaurant name matches the regex
		return regex.test(normalizedRestaurantName);
	});
};
