import { useParams } from "react-router-dom";
import { FaClock, FaStar, FaRupeeSign } from "react-icons/fa";
import { RestaurantDetailShimmer } from "../components/RestaurantDetailShimmer";
import { useRestaurantDetailFetch } from "../hooks/useRestaurantDetailFetch";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

export default function RestaurantDetail() {
   const { resId } = useParams();

   //custom hook to fetch all restaurantDetails and recommended section
   const { restaurantDetails, recommended } = useRestaurantDetailFetch(resId);

   const dispatch = useDispatch();

   const curatedItems =
      recommended
         ?.flatMap((section) => section?.card?.card?.itemCards || [])
         .map((itemCard) => itemCard?.card?.info)
         .filter(Boolean) || [];

   const handleAddItem = (item) => {
      const unitPrice = (item?.price ?? item?.defaultPrice ?? 0) / 100;
      const itemToAdd = {
         id: item?.id,
         name: item?.name,
         quantity: 1,
         price: unitPrice,
      };
      dispatch(addToCart(itemToAdd));
   };

   const handleRemoveItem = (item) => {
      const itemToRemove = {
         id: item?.id,
      };
      dispatch(removeFromCart(itemToRemove));
   };

   if (!restaurantDetails?.name) {
      return <RestaurantDetailShimmer />;
   }

   return (
      <section className="section-wrapper space-y-10">
         <article className="surface-card rounded-3xl border border-slate-200/60 bg-white/95 px-6 py-8 shadow-soft sm:px-10 sm:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
               <div className="space-y-4">
                  <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-500">
                     {restaurantDetails?.city}
                  </span>
                  <div className="space-y-2">
                     <h1 className="text-3xl font-semibold text-slate-900">
                        {restaurantDetails?.name}
                     </h1>
                     <p className="text-sm font-medium text-slate-500">
                        {restaurantDetails?.cuisines?.join(", ")}
                     </p>
                     <p className="text-sm text-slate-500">
                        {restaurantDetails?.areaName}
                        {restaurantDetails?.sla?.lastMileTravelString && (
                           <span className="text-slate-400">
                              {" "}
                              • {restaurantDetails?.sla?.lastMileTravelString}
                           </span>
                        )}
                     </p>
                  </div>

                  {restaurantDetails?.feeDetails?.message && (
                     <div className="inline-flex items-center gap-2 rounded-2xl bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-600 shadow-soft/20 ring-1 ring-orange-200/60">
                        <img
                           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
                           alt="Delivery icon"
                           className="h-4 w-4"
                        />
                        {restaurantDetails?.feeDetails?.message}
                     </div>
                  )}
               </div>

               <div className="flex w-full max-w-xs flex-col gap-4 rounded-3xl bg-slate-50 px-6 py-6 text-sm text-slate-600 shadow-inner ring-1 ring-slate-200/70 sm:max-w-sm">
                  <div className="flex items-center gap-3">
                     <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-600">
                        <FaStar />
                     </span>
                     <div>
                        <p className="text-2xl font-semibold text-slate-900 leading-none">
                           {restaurantDetails?.avgRatingString}
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-500">
                           {restaurantDetails?.totalRatingsString}
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                     <FaClock className="text-orange-500" />
                     <span>{restaurantDetails?.sla?.slaString}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                     <FaRupeeSign className="text-slate-500" />
                     <span>{restaurantDetails?.costForTwoMessage}</span>
                  </div>
               </div>
            </div>
         </article>

         <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
               <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                     curated menu
                  </p>
                  <h2 className="text-2xl font-semibold text-slate-900">
                     Signature dishes & chef specials
                  </h2>
               </div>
               <span className="badge-soft">{curatedItems.length} items</span>
            </div>

            <div className="space-y-4">
               {curatedItems.length === 0 ? (
                  <div className="rounded-3xl bg-white/80 p-10 text-center shadow-soft">
                     <p className="text-sm text-slate-500">
                        Menu details are temporarily unavailable. Please check
                        back soon.
                     </p>
                  </div>
               ) : (
                  curatedItems.slice(0, 20).map((item) => (
                     <div
                        key={item?.id}
                        className="flex flex-col gap-4 rounded-3xl bg-white/90 p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between"
                     >
                        <div className="space-y-1">
                           <p className="text-base font-semibold text-slate-900">
                              {item?.name}
                           </p>
                           {item?.description && (
                              <p className="text-sm text-slate-500">
                                 {item?.description}
                              </p>
                           )}
                           <div className="text-sm font-semibold text-slate-600">
                              ₹
                              {(
                                 (item?.price || item?.defaultPrice || 0) / 100
                              ).toFixed(2)}
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <button
                              onClick={() => handleRemoveItem(item)}
                              className="btn-secondary"
                           >
                              Remove
                           </button>
                           <button
                              onClick={() => handleAddItem(item)}
                              className="btn-primary"
                           >
                              Add
                           </button>
                        </div>
                     </div>
                  ))
               )}
            </div>
         </div>
      </section>
   );
}
