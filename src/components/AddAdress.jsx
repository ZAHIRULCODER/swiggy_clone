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
      <div className="text-center p-10">
         <div className=" p-5 border rounded  w-[400px] ">
            <h3 className="text-xl font-bold p-2">Enter Your Address</h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
               <input
                  className="border p-2 w-full"
                  type="text"
                  onChange={(e) =>
                     dispatch(
                        setAddress({ field: "name", value: e.target.value })
                     )
                  }
                  name="name"
                  placeholder="Enter Your Name "
                  required
               />
               <input
                  className="border p-2 w-full"
                  type="text"
                  onChange={(e) =>
                     dispatch(
                        setAddress({ field: "line1", value: e.target.value })
                     )
                  }
                  name="line1"
                  placeholder="Address Line "
                  required
               />
               <input
                  className="border p-2 w-full"
                  type="text"
                  onChange={(e) =>
                     dispatch(
                        setAddress({ field: "floor", value: e.target.value })
                     )
                  }
                  name="floor"
                  placeholder="Floor / Flat No."
                  required
               />
               <input
                  className="border p-2 w-full"
                  type="text"
                  onChange={(e) =>
                     dispatch(
                        setAddress({ field: "city", value: e.target.value })
                     )
                  }
                  name="city"
                  placeholder="City"
                  required
               />
               <input
                  className="border p-2 w-full"
                  type="text"
                  onChange={(e) =>
                     dispatch(
                        setAddress({ field: "state", value: e.target.value })
                     )
                  }
                  name="state"
                  placeholder="State"
                  required
               />
               <input
                  className="border p-2 w-full"
                  type="text"
                  onChange={(e) =>
                     dispatch(
                        setAddress({ field: "zip", value: e.target.value })
                     )
                  }
                  name="zip"
                  placeholder="Zip Code"
                  required
               />
               <input
                  className="border p-2 w-full"
                  type="text"
                  onChange={(e) =>
                     dispatch(
                        setAddress({ field: "country", value: e.target.value })
                     )
                  }
                  name="country"
                  placeholder="Country"
                  required
               />
               <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
               >
                  Add Address
               </button>
            </form>
         </div>
      </div>
   ) : (
      <div className="text-center p-10">
         <div className="p-5 border rounded w-[400px]">
            <h3 className="text-xl font-bold p-2">Address Added</h3>
            <p>Name: {address.name}</p>
            <p>Address: {address.line1}</p>
            <p>Floor/Flat: {address.floor}</p>
            <p>City: {address.city}</p>
            <p>State: {address.state}</p>
            <p>Zip: {address.zip}</p>
            <p>Country: {address.country}</p>
            <button
               onClick={() => dispatch(editAddress())}
               className="bg-red-500 text-white p-2 rounded mt-4"
            >
               Edit Address
            </button>
         </div>
      </div>
   );
}
