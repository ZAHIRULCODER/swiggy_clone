export function RestaurantDetailShimmer() {
   return (
      <div className="flex justify-center mt-10">
         <div className="bg-white p-4 border w-[800px]">
            {/* Header Shimmer */}
            <div className="animate-pulse">
               <div className="h-6 bg-slate-400 rounded mb-2 w-3/4"></div>
               <div className="h-4 bg-slate-400 rounded mb-4 w-1/2"></div>
            </div>

            {/* Area and Rating Card Shimmer */}
            <div className="flex justify-between mb-4">
               <div className="animate-pulse h-4 bg-slate-400 rounded w-1/3"></div>
               <div className="max-w-xs rounded overflow-hidden shadow-lg bg-slate-400 p-4 -mt-10 w-32 h-16"></div>
            </div>

            {/* Fee Message Shimmer */}
            <div className="animate-pulse flex gap-2 mb-4">
               <div className="w-4 h-4 bg-slate-400 rounded"></div>
               <div className="h-4 bg-slate-400 rounded w-2/3"></div>
            </div>

            {/* Delivery Info Shimmer */}
            <div className="animate-pulse border-t border-gray-300 my-5 pt-5 flex gap-5">
               <div className="h-4 bg-slate-400 rounded w-1/4"></div>
               <div className="h-4 bg-slate-400 rounded w-1/4"></div>
            </div>

            {/* Menu Header Shimmer */}
            <div className="animate-pulse mb-4">
               <div className="h-6 bg-slate-400 rounded w-20"></div>
            </div>

            {/* Menu Items Shimmer */}
            <div className="space-y-2">
               {Array.from({ length: 12 }).map((_, index) => (
                  <div
                     key={index}
                     className="animate-pulse flex justify-between items-center py-2 border-b-2 border-slate-300"
                  >
                     <div className="h-4 bg-slate-400 rounded w-1/2"></div>
                     <div className="flex items-center gap-2">
                        <div className="h-4 bg-slate-400 rounded w-12"></div>
                        <div className="h-8 bg-slate-400 rounded w-16"></div>
                        <div className="h-8 bg-slate-400 rounded w-20"></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
