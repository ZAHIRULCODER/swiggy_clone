export function Spinner() {
   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur">
         <div
            className="flex flex-col items-center gap-4 rounded-3xl bg-white/90 px-10 py-8 text-center shadow-2xl shadow-slate-900/20"
            role="status"
            aria-live="assertive"
         >
            <span className="inline-flex h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
            <p className="text-sm font-semibold text-slate-700">
               Processing your secure payment...
            </p>
         </div>
      </div>
   );
}
