import { AddAdress } from "./AddAdress";
import { BillDetailsCard } from "./BillDetailsCard";

export function CheckoutSummary() {
   return (
      <section className="section-wrapper">
         <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <AddAdress />
            <BillDetailsCard />
         </div>
      </section>
   );
}
