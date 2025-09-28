export const filterData = (searchText, restaurants) => {
   const normalizedSearchText = searchText.replace(/\s/g, "").toLowerCase();
   const regex = new RegExp(normalizedSearchText, "i");
   return restaurants.filter((restaurant) => {
      const normalizedRestaurantName = restaurant?.info?.name
         .replace(/\s/g, "")
         .toLowerCase();
      return regex.test(normalizedRestaurantName);
   });
};
