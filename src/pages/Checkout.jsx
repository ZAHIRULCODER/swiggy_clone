import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CheckoutSummary } from "../components/CheckoutSummary";

export default function Checkout() {
   const cartItems = useSelector((store) => store.cart.items);

   return cartItems?.length === 0 ? (
      <section className="section-wrapper flex min-h-[60vh] flex-col items-center justify-center text-center">
         <img
            src="https://cdn.dineorder.com/public/asset/img/cook.png"
            alt="Empty cart illustration"
            className="h-48 w-48 object-contain"
         />
         <h1 className="mt-8 text-3xl font-semibold text-slate-900">
            Your cart is empty
         </h1>
         <p className="mt-3 max-w-md text-sm text-slate-500">
            Browse restaurants to add your favourite dishes. We&apos;ll be ready
            when you are.
         </p>
         <Link to="/" className="btn-primary mt-8">
            Explore restaurants
         </Link>
      </section>
   ) : (
      <div className="space-y-12">
         <section className="section-wrapper rounded-3xl bg-white/80 p-10 text-center shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
               checkout
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">
               Confirm your delivery details & secure payment
            </h1>
            <p className="mt-3 text-sm text-slate-500">
               Add your delivery address, review order totals, and place your
               order with confidence.
            </p>
         </section>
         <CheckoutSummary />
      </div>
   );
}
