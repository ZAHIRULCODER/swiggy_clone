import { AddAdress } from "./AddAdress";
import { BillDetailsCard } from "./BillDetailsCard";

export function CheckoutSummary() {
   return (
      <>
         <div className="flex justify-between">
            {/* Left */}
            <AddAdress />

            {/* Right */}
            <BillDetailsCard />
         </div>
      </>
   );
}
