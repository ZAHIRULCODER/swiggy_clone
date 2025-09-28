export function HomeShimmerUI() {
   return (
      <section className="grid-responsive mt-6">
         {Array.from({ length: 12 }).map((_, index) => (
            <div
               key={index}
               className="surface-card animate-pulse overflow-hidden"
            >
               <div className="relative aspect-[4/3] bg-slate-200">
                  {index % 2 === 0 && (
                     <div className="absolute inset-x-4 bottom-4 h-6 rounded-full bg-slate-300/80"></div>
                  )}
               </div>
               <div className="space-y-3 px-5 pb-5 pt-4">
                  <div className="h-5 w-3/4 rounded-full bg-slate-200"></div>
                  <div className="flex items-center gap-3">
                     <div className="h-4 w-1/3 rounded-full bg-slate-200"></div>
                     <div className="h-4 w-12 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="h-4 w-full rounded-full bg-slate-200"></div>
                  <div className="h-4 w-2/3 rounded-full bg-slate-200"></div>
               </div>
            </div>
         ))}
      </section>
   );
}
