import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function CartHoverCard() {
   const cartItems = useSelector((store) => store.cart.items);

   const calculateTotal = (items) =>
      items.reduce((acc, item) => acc + item?.price * item?.quantity, 0);

   return (
      <div className="absolute right-0 mt-3 w-80 origin-top-right rounded-3xl border border-slate-200/70 bg-white/95 p-5 text-slate-800 shadow-2xl shadow-slate-900/20 backdrop-blur transition">
         {cartItems?.length === 0 ? (
            <div className="space-y-3 text-center">
               <h3 className="text-lg font-semibold text-slate-900">
                  Cart empty
               </h3>
               <p className="text-sm text-slate-500">
                  Good food is always cooking! Explore the menu to add your
                  first treat.
               </p>
            </div>
         ) : (
            <>
               <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900">
                     Your items
                  </h3>
                  <span className="badge-soft">{cartItems.length} saved</span>
               </div>
               <div className="mb-5 max-h-56 space-y-3 overflow-auto pr-2">
                  {cartItems.map((item, index) => (
                     <div
                        key={`${item?.id}-${index}`}
                        className="flex items-start justify-between gap-3 rounded-2xl bg-slate-50/70 px-3 py-2 text-sm"
                     >
                        <div className="flex flex-col">
                           <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                              {item?.quantity}×
                           </span>
                           <span className="font-medium text-slate-900">
                              {item?.name}
                           </span>
                        </div>
                        <span className="whitespace-nowrap font-semibold text-slate-900">
                           ₹ {(item?.price * item?.quantity).toFixed(2)}
                        </span>
                     </div>
                  ))}
               </div>
               <div className="mb-5 flex items-center justify-between text-sm font-semibold text-slate-900">
                  <span>Subtotal</span>
                  <span>₹ {calculateTotal(cartItems).toFixed(2)}</span>
               </div>
               <Link
                  to="/checkout"
                  className="btn-primary w-full justify-center"
               >
                  Review cart
               </Link>
            </>
         )}
      </div>
   );
}
