import { Link } from "react-router-dom";

export default function PaymentSuccessful() {
   return (
      <section className="flex min-h-[70vh] w-full items-center justify-center">
         <div className="surface-card flex w-full max-w-xl flex-col items-center rounded-3xl p-12 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
               <svg viewBox="0 0 24 24" className="h-12 w-12" aria-hidden>
                  <path
                     fill="currentColor"
                     d="M12 2a10 10 0 1 0 10 10A10.013 10.013 0 0 0 12 2Zm4.707 7.293-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l4.293-4.293a1 1 0 0 1 1.414 1.414Z"
                  />
               </svg>
            </div>
            <h1 className="mt-6 text-3xl font-semibold text-slate-900">
               Payment successful!
            </h1>
            <p className="mt-3 text-sm text-slate-500">
               Thank you for trusting Rapid Eats. Your order is confirmed and
               our delivery partner will be on the move shortly.
            </p>
            <div className="mt-10 flex flex-col gap-4 text-sm text-slate-600">
               <p>We&apos;ve sent the receipt to your registered email.</p>
               <p>Track your order status from the dashboard anytime.</p>
            </div>
            <Link to="/" className="btn-primary mt-10">
               Continue browsing
            </Link>
         </div>
      </section>
   );
}
