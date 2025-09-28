export function HomeShimmerUI() {
   return (
      <div className="flex flex-row flex-wrap justify-center mx-2">
         {Array.from({ length: 10 }).map((_, index) => (
            <div
               key={index}
               className="flex justify-center items-center gap-4 m-6 flex-wrap"
            >
               <div className="animate-pulse w-[270px]">
                  {/* Image shimmer */}
                  <div className="relative">
                     <div className="h-[180px] w-full bg-slate-400 rounded-2xl"></div>
                     {/* Discount overlay shimmer (show on some cards) */}
                     {index % 3 === 0 && (
                        <div className="absolute bottom-0 rounded-b-2xl w-full bg-slate-500 p-1">
                           <div className="h-5 bg-slate-600 rounded"></div>
                        </div>
                     )}
                  </div>
                  {/* Text content shimmer */}
                  <div className="mt-2.5">
                     {/* Name */}
                     <div className="h-5 bg-slate-400 rounded mt-2.5 ml-2 w-3/4"></div>
                     {/* Rating and SLA */}
                     <div className="h-4 bg-slate-400 rounded ml-2 my-1.5 w-1/2"></div>
                     {/* Cuisines and Area */}
                     <div className="h-4 bg-slate-400 rounded ml-2 w-2/3"></div>
                     <div className="h-4 bg-slate-400 rounded ml-2 w-1/2"></div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
