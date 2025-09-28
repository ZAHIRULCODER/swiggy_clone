export const filterData = (searchText, restaurants = []) => {
   const normalized = searchText?.trim().toLowerCase();

   if (!normalized) {
      return restaurants;
   }

   return restaurants.filter((restaurant) => {
      const info = restaurant?.info;
      const nameMatch = info?.name?.toLowerCase().includes(normalized);
      const cuisineMatch = info?.cuisines?.some((cuisine) =>
         cuisine?.toLowerCase().includes(normalized)
      );
      const areaMatch = info?.areaName?.toLowerCase().includes(normalized);

      return nameMatch || cuisineMatch || areaMatch;
   });
};
