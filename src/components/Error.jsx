import { Link, useRouteError } from "react-router-dom";

export function Error() {
   const error = useRouteError();
   const { status, statusText } = error;

   return (
      <section className="flex min-h-[70vh] w-full items-center justify-center">
         <div className="surface-card flex w-full max-w-xl flex-col items-center rounded-3xl p-10 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-500">
               <span className="text-3xl">⚠️</span>
            </div>
            <h1 className="mt-6 text-3xl font-semibold text-slate-900">
               {status || 500} — Something went wrong
            </h1>
            <p className="mt-3 text-sm text-slate-500">
               {statusText || "An unexpected error occurred."}
            </p>
            <Link to="/" className="btn-primary mt-8">
               Back to home
            </Link>
         </div>
      </section>
   );
}
