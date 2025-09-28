import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function HelpSupport() {
   const [activeSection, setActiveSection] = useState(null);

   const toggleSection = (section) => {
      setActiveSection(activeSection === section ? null : section);
   };

   return (
      <div className="flex justify-center items-center p-5">
         <div className="  bg-white px-8 pt-6 pb-8 mb-4 w-[900px]">
            <h2 className="text-xl mb-4 font-bold text-gray-700">
               Help & Support
            </h2>
            <p className="mb-4 text-gray-600 font-bold">
               Partner Onboarding - Let's take a step ahead and help you better.
            </p>
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
   );
}


const Section = ({ title, description, isVisible, setIsVisible }) => {
   return (
      <div className="text-gray-600">
         <button
            onClick={setIsVisible}
            className="font-bold text-lg flex justify-between items-center mx-auto w-full py-3 hover:text-orange-600"
         >
            {title}
            {isVisible ? <FaAngleUp /> : <FaAngleDown />}
         </button>
         {isVisible && <p>{description}</p>}
         <hr className="my-5" />
      </div>
   );
};
