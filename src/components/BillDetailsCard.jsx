import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Spinner } from "./Spinner";

export function BillDetailsCard() {
   const cartItems = useSelector((store) => store.cart.items);
   const address = useSelector((store) => store.address.value);
   const submitted = useSelector((store) => store.address.submitted);
   const [showSpinner, setShowSpinner] = useState(false);

   const dispatch = useDispatch();

   const calculateSubtotal = (items) =>
      items.reduce((acc, item) => acc + item?.price * item?.quantity, 0);

   const deliveryFee = cartItems.length ? 29 : 0;
   const taxRate = 0.05;
   const taxes = calculateSubtotal(cartItems) * taxRate;
   const payable = calculateSubtotal(cartItems) + deliveryFee + taxes;

   const handlePayment = () => {
      if (!submitted) {
         toast.error("Please add shipping address first");
      } else {
         setShowSpinner(true);
         setTimeout(() => {
            setShowSpinner(false);
            toast.success("Payment Successful");
            window.location.href = "/paymentsuccessful";
         }, 2000);
      }
   };

   return (
      <section className="relative w-full max-w-md">
         <div className="surface-card rounded-3xl p-8">
            <header className="mb-6 flex items-center justify-between">
               <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                     Order summary
                  </p>
                  <h2 className="text-2xl font-semibold text-slate-900">
                     Your basket
                  </h2>
               </div>
               <button
                  onClick={() => dispatch(clearCart())}
                  className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 transition hover:border-red-200 hover:text-red-500"
               >
                  Clear all
               </button>
            </header>

            <div className="mb-6 max-h-56 space-y-3 overflow-auto pr-2">
               {cartItems.length === 0 ? (
                  <p className="rounded-2xl bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
                     Your cart is waiting for something delicious.
                  </p>
               ) : (
                  cartItems.map((item, index) => (
                     <div
                        key={`${item?.id}-${index}`}
                        className="flex items-start justify-between gap-3 rounded-2xl bg-slate-50/80 px-4 py-3 text-sm"
                     >
                        <div>
                           <p className="text-sm font-semibold text-slate-900">
                              {item?.name}
                           </p>
                           <p className="text-xs font-medium text-slate-500">
                              Qty {item?.quantity}
                           </p>
                        </div>
                        <span className="whitespace-nowrap font-semibold text-slate-900">
                           ₹ {(item?.price * item?.quantity).toFixed(2)}
                        </span>
                     </div>
                  ))
               )}
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-50/60 p-5 text-sm text-slate-600">
               <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                     ₹ {calculateSubtotal(cartItems).toFixed(2)}
                  </span>
               </div>
               <div className="flex items-center justify-between">
                  <span>Delivery fee</span>
                  <span className="font-semibold text-slate-900">
                     ₹ {deliveryFee.toFixed(2)}
                  </span>
               </div>
               <div className="flex items-center justify-between">
                  <span>Taxes & charges</span>
                  <span className="font-semibold text-slate-900">
                     ₹ {taxes.toFixed(2)}
                  </span>
               </div>
               <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900">
                  <span>Payable now</span>
                  <span>₹ {payable.toFixed(2)}</span>
               </div>
            </div>

            <button
               onClick={handlePayment}
               className="btn-primary mt-6 w-full justify-center"
               disabled={!cartItems.length}
            >
               {cartItems.length
                  ? "Pay ₹" + payable.toFixed(2)
                  : "Add items to continue"}
            </button>
         </div>

         {showSpinner && <Spinner />}
      </section>
   );
}
