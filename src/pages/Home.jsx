import { RestaurantCard } from "../components/RestaurantCard";
import { HomeShimmerUI } from "../components/HomeShimmerUI";
import { Link } from "react-router-dom";
import { useRestaurantFetch } from "../hooks/useRestaurantFetch";
import { useOnline } from "../hooks/useOnline";

export default function Home() {
   const { allRestaurants, filteredRestaurant, loading } = useRestaurantFetch();

   const isOnline = useOnline();

   if (!isOnline) {
      return (
         <section className="section-wrapper flex flex-col items-center justify-center rounded-3xl bg-white/80 p-16 text-center shadow-soft">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl">
               🔴
            </span>
            <h1 className="mt-6 text-3xl font-semibold text-slate-900">
               You&apos;re currently offline
            </h1>
            <p className="mt-3 max-w-md text-sm text-slate-500">
               Please check your internet connection and try again. We&apos;ll
               keep the table warm for you.
            </p>
         </section>
      );
   }

   // Show loading shimmer while fetching
   if (loading)
      return (
         <div className="section-wrapper">
            <HomeShimmerUI />
         </div>
      );

   // Early return if no restaurants are available
   if (!allRestaurants || allRestaurants.length === 0) {
      return (
         <section className="section-wrapper flex flex-col items-center justify-center rounded-3xl bg-white/80 p-16 text-center shadow-soft">
            <h1 className="text-3xl font-semibold text-slate-900">
               No restaurants found nearby
            </h1>
            <p className="mt-3 max-w-md text-sm text-slate-500">
               We&apos;re expanding rapidly! Try adjusting your search or check
               back soon for more delicious options near you.
            </p>
         </section>
      );
   }

   return (
      <div className="space-y-12">
         <section className="section-wrapper flex flex-col gap-10 rounded-3xl bg-white/80 p-10 shadow-soft lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-4">
               <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                  curated for you
               </p>
               <h1 className="text-4xl font-semibold leading-tight text-slate-900">
                  Discover new flavours, delivered at swifty speed.
               </h1>
               <p className="text-sm text-slate-500">
                  Browse handpicked restaurants, trending dishes, and signature
                  meals from local favourites—all optimised for fast delivery in
                  your city.
               </p>
            </div>
            <div className="grid w-full max-w-sm gap-3 text-sm text-slate-600">
               <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
                  <span>Total restaurants</span>
                  <span className="font-semibold text-slate-900">
                     {allRestaurants.length}
                  </span>
               </div>
               <div className="flex items-center justify-between rounded-2xl bg-orange-50 px-5 py-4">
                  <span>Matching your search</span>
                  <span className="font-semibold text-orange-600">
                     {filteredRestaurant?.length ?? 0}
                  </span>
               </div>
               <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-5 py-4 text-white">
                  <span>Delivery promise</span>
                  <span className="font-semibold">Under 30 mins</span>
               </div>
            </div>
         </section>

         <section className="section-wrapper">
            {filteredRestaurant?.length > 0 ? (
               <div className="grid-responsive">
                  {filteredRestaurant.map((restaurant) => (
                     <Link
                        to={`/restaurants/${restaurant?.info?.id}`}
                        key={restaurant?.info?.id}
                        className="flex justify-center"
                     >
                        <RestaurantCard {...restaurant?.info} />
                     </Link>
                  ))}
               </div>
            ) : (
               <div className="flex min-h-[30vh] flex-col items-center justify-center rounded-3xl bg-white/80 text-center shadow-soft">
                  <h2 className="text-2xl font-semibold text-slate-900">
                     No restaurants match your filters
                  </h2>
                  <p className="mt-3 max-w-md text-sm text-slate-500">
                     Try adjusting your search terms or explore the full
                     collection to discover something new.
                  </p>
               </div>
            )}
         </section>
      </div>
   );
}
