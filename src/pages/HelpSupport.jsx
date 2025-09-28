import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function HelpSupport() {
   const [activeSection, setActiveSection] = useState(null);

   const toggleSection = (section) => {
      setActiveSection(activeSection === section ? null : section);
   };

   return (
      <section className="section-wrapper">
         <div className="surface-card rounded-3xl px-8 py-10">
            <div className="max-w-3xl space-y-3">
               <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                  Help centre
               </p>
               <h2 className="text-3xl font-semibold text-slate-900">
                  Partner onboarding & support
               </h2>
               <p className="text-sm text-slate-500">
                  Explore the most frequently asked questions about onboarding
                  your restaurant to Rapid Eats. Click a topic to reveal
                  detailed guidance.
               </p>
            </div>
            <div className="mt-8 divide-y divide-slate-200">
               <Section
                  isVisible={activeSection === "partner"}
                  setIsVisible={() => toggleSection("partner")}
                  title={"I want to partner my restaurant with Swiggy"}
                  description={
                     "Partner with us by sending a email at partnersuport@swiggy.in"
                  }
               />
               <Section
                  isVisible={activeSection === "documents"}
                  setIsVisible={() => toggleSection("documents")}
                  title={
                     "What are the mandatory documents needed to list my restaurant on Swiggy?"
                  }
                  description={
                     "FSSAI Licence OR FSSAI Acknowledgement, Pan Card, GSTIN Certificate Cancelled Cheque OR bank Passbook, Menu"
                  }
               />
               <Section
                  isVisible={activeSection === "live"}
                  setIsVisible={() => toggleSection("live")}
                  title={
                     "After I submit all documents, how long will it take for my restaurant to go live on Swiggy?"
                  }
                  description={
                     "After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform."
                  }
               />
               <Section
                  isVisible={activeSection === "onboarding"}
                  setIsVisible={() => toggleSection("onboarding")}
                  title={
                     "What is this one time Onboarding fees? Do I have to pay for it while registering?"
                  }
                  description={
                     "This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy."
                  }
               />
               <Section
                  isVisible={activeSection === "contact"}
                  setIsVisible={() => toggleSection("contact")}
                  title={
                     "Who should I contact if I need help & support in getting onboarded?"
                  }
                  description={
                     "You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@swiggy.in"
                  }
               />
               <Section
                  isVisible={activeSection === "charges"}
                  setIsVisible={() => toggleSection("charges")}
                  title={"How much commission will I be charged by Swiggy?"}
                  description={
                     "The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled."
                  }
               />
               <Section
                  isVisible={activeSection === "licence"}
                  setIsVisible={() => toggleSection("licence")}
                  title={
                     "I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?"
                  }
                  description={
                     "FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration."
                  }
               />
            </div>
         </div>
      </section>
   );
}

const Section = ({ title, description, isVisible, setIsVisible }) => {
   return (
      <div className="py-4 text-slate-600 first:pt-0 last:pb-0">
         <button
            onClick={setIsVisible}
            className="flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-4 text-left text-base font-semibold text-slate-900 transition hover:bg-orange-50"
         >
            {title}
            <span className="text-xl text-orange-500">
               {isVisible ? <FaAngleUp /> : <FaAngleDown />}
            </span>
         </button>
         {isVisible && (
            <p className="mt-2 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
               {description}
            </p>
         )}
      </div>
   );
};
