import { RestaurantCard } from "../components/RestaurantCard";
import { ShimmerUI } from "../components/ShimmerUI";
import { Link } from "react-router-dom";
import { useRestaurantFetch } from "../hooks/useRestaurantFetch";
import { useOnline } from "../hooks/useOnline";

export default function Home() {
   const { allRestaurants, filteredRestaurant, loading } = useRestaurantFetch();

   const isOnline = useOnline();

   if (!isOnline) {
      return (
         <h1 className="text-3xl text-center">
            🔴 Offline, Please Check Your Internet Connection
         </h1>
      );
   }

   // Show loading shimmer while fetching
   if (loading) return <ShimmerUI />;

   // Early return if no restaurants are available
   if (!allRestaurants || allRestaurants.length === 0) {
      return (
         <h1 className="text-4xl text-center mt-10">No Restaurants Found</h1>
      );
   }

   return (
      <div className="flex flex-row flex-wrap justify-center mx-2 ">
         {/* no restaurants found logic */}
         {filteredRestaurant?.length > 0 ? (
            filteredRestaurant.map((restaurant) => (
               <Link
                  to={`/restaurants/${restaurant?.info?.id}`}
                  key={restaurant?.info?.id}
               >
                  <RestaurantCard {...restaurant?.info} />
               </Link>
            ))
         ) : (
            <h1 className="text-4xl text-center  mt-10">
               No Restaurants Found
            </h1>
         )}
      </div>
   );
}


