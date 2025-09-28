export function ShimmerUI() {
   return (
      <div className="flex flex-wrap gap-4 m-6 justify-center">
         {Array.from({ length: 12 }).map((_, index) => (
            <div
               key={index}
               className="animate-pulse w-[270px] h-[180px] m-5 bg-slate-400  p-4 rounded-lg"
            ></div>
         ))}
      </div>
   );
}
