import { useDispatch, useSelector } from "react-redux";
import {
   setAddress,
   editAddress,
   setSubmitted,
} from "../features/address/addressSlice";

export function AddAdress() {
   const dispatch = useDispatch();
   const address = useSelector((store) => store.address.value);
   const submitted = useSelector((store) => store.address.submitted);

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setSubmitted(true));
      // console.log(address);
   };

   return !submitted ? (
      <section className="surface-card w-full max-w-md rounded-3xl p-8">
         <header className="space-y-1 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
               Delivery details
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">
               Add your address
            </h3>
            <p className="text-sm text-slate-500">
               We deliver from the nearest kitchen. Let us know where to drop
               the goodness.
            </p>
         </header>

         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {[
               {
                  field: "name",
                  label: "Full name",
                  placeholder: "Enter your name",
               },
               {
                  field: "line1",
                  label: "Street address",
                  placeholder: "House no. and street",
               },
               {
                  field: "floor",
                  label: "Apartment / Floor",
                  placeholder: "Floor or flat number",
               },
               { field: "city", label: "City", placeholder: "City" },
               { field: "state", label: "State", placeholder: "State" },
               {
                  field: "zip",
                  label: "Postal code",
                  placeholder: "Postal code",
               },
               { field: "country", label: "Country", placeholder: "Country" },
            ].map(({ field, label, placeholder }) => (
               <label
                  key={field}
                  className="block text-left text-sm font-semibold text-slate-600"
               >
                  <span>{label}</span>
                  <input
                     className="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                     type="text"
                     onChange={(e) =>
                        dispatch(setAddress({ field, value: e.target.value }))
                     }
                     name={field}
                     placeholder={placeholder}
                     required
                  />
               </label>
            ))}

            <button type="submit" className="btn-primary w-full justify-center">
               Save delivery address
            </button>
         </form>
      </section>
   ) : (
      <section className="surface-card w-full max-w-md rounded-3xl p-8 text-left">
         <header className="space-y-1">
            <p className="badge-soft">Address ready</p>
            <h3 className="text-xl font-semibold text-slate-900">
               Delivery destination
            </h3>
            <p className="text-sm text-slate-500">
               Double-check everything looks correct before placing your order.
            </p>
         </header>

         <dl className="mt-6 space-y-3 text-sm text-slate-600">
            <div>
               <dt className="font-semibold text-slate-500">Name</dt>
               <dd className="text-slate-900">{address.name}</dd>
            </div>
            <div>
               <dt className="font-semibold text-slate-500">Address</dt>
               <dd className="text-slate-900">{address.line1}</dd>
            </div>
            <div>
               <dt className="font-semibold text-slate-500">Floor / Flat</dt>
               <dd className="text-slate-900">{address.floor}</dd>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
               <div>
                  <dt className="font-semibold text-slate-500">City</dt>
                  <dd className="text-slate-900">{address.city}</dd>
               </div>
               <div>
                  <dt className="font-semibold text-slate-500">State</dt>
                  <dd className="text-slate-900">{address.state}</dd>
               </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
               <div>
                  <dt className="font-semibold text-slate-500">Postal code</dt>
                  <dd className="text-slate-900">{address.zip}</dd>
               </div>
               <div>
                  <dt className="font-semibold text-slate-500">Country</dt>
                  <dd className="text-slate-900">{address.country}</dd>
               </div>
            </div>
         </dl>

         <button
            onClick={() => dispatch(editAddress())}
            className="btn-secondary mt-6 w-full justify-center"
         >
            Edit address
         </button>
      </section>
   );
}
