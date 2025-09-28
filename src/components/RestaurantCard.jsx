import { IMG_CDN_URL } from "../constant";
import { FaStar } from "react-icons/fa";

export function RestaurantCard({
   name,
   avgRatingString,
   sla,
   cuisines,
   areaName,
   cloudinaryImageId,
   aggregatedDiscountInfoV3,
}) {
   return (
      <article className="group relative flex h-full w-full max-w-xs flex-col transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]">
         <div className="surface-card flex h-full min-h-[22rem] flex-col overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
               <img
                  src={IMG_CDN_URL + cloudinaryImageId}
                  alt={`Image of ${name}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  loading="lazy"
               />
               {aggregatedDiscountInfoV3 && (
                  <div className="absolute inset-x-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-slate-900/40">
                     <span>{aggregatedDiscountInfoV3?.header}</span>
                     {aggregatedDiscountInfoV3?.subHeader && (
                        <span className="text-orange-300">
                           {aggregatedDiscountInfoV3?.subHeader}
                        </span>
                     )}
                  </div>
               )}
            </div>

            <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-4">
               <div className="flex items-start justify-between gap-3">
                  <h3 className="truncate text-lg font-semibold text-slate-900">
                     {name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                     <FaStar className="text-emerald-500" />
                     {avgRatingString}
                  </span>
               </div>

               <div className="flex min-w-0 items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] uppercase tracking-wide text-slate-600">
                     {sla?.slaString}
                  </span>
                  <span
                     className="h-1 w-1 rounded-full bg-slate-300"
                     aria-hidden
                  />
                  <span className="truncate text-right">{areaName}</span>
               </div>

               <p className="line-clamp-2 text-sm text-slate-500">
                  {cuisines?.join(", ")}
               </p>
            </div>
         </div>
         <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition duration-300 group-hover:border-orange-200" />
      </article>
   );
}
