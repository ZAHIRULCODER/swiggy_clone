export function RestaurantDetailShimmer() {
   return (
      <section className="section-wrapper mt-10">
         <div className="surface-card animate-pulse rounded-3xl p-8">
            <div className="space-y-4">
               <div className="h-8 w-2/3 rounded-full bg-slate-200"></div>
               <div className="h-4 w-1/2 rounded-full bg-slate-200"></div>
            </div>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
               <div className="h-4 w-64 rounded-full bg-slate-200"></div>
               <div className="h-24 w-40 rounded-2xl bg-slate-200"></div>
            </div>

            <div className="mt-6 flex gap-4">
               <div className="h-4 w-40 rounded-full bg-slate-200"></div>
               <div className="h-4 w-32 rounded-full bg-slate-200"></div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
               <div className="h-5 w-16 rounded-full bg-slate-200"></div>
               <div className="mt-4 space-y-3">
                  {Array.from({ length: 10 }).map((_, index) => (
                     <div
                        key={index}
                        className="flex items-center justify-between rounded-2xl bg-slate-100/70 px-4 py-3"
                     >
                        <div className="h-4 w-1/2 rounded-full bg-slate-200"></div>
                        <div className="flex items-center gap-3">
                           <div className="h-4 w-16 rounded-full bg-slate-200"></div>
                           <div className="h-9 w-20 rounded-full bg-slate-200"></div>
                           <div className="h-9 w-20 rounded-full bg-slate-200"></div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
