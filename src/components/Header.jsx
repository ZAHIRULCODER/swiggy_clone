import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { useAuth } from "../hooks/useAuth";
import { useLocation, Link } from "react-router-dom";
import { Search } from "./Search";
import brandLogo from "../assets/brand.png";
import { CartHoverCard } from "./CartHoverCard";
import { useSelector } from "react-redux";

const Logo = () => {
   return (
      <div className="flex items-center cursor-pointer transform transition-transform hover:scale-125 ">
         <Link href="/">
            <img className="w-[80px]" src={brandLogo} alt="brand logo" />
         </Link>
      </div>
   );
};

export function Header() {
   const { isLoggedIn, SignIn, Logout } = useAuth();
   const [isCartHovered, setIsCartHovered] = useState(false);
   const location = useLocation();

   // Placeholder to maintain layout structure when Search is not rendered
   const SearchPlaceholder = () => <div className="flex-grow"></div>;

   const itemCount = useSelector((store) => store.cart.itemCount);

   return (
      <>
         <header className="fixed top-0 left-0 right-0 z-10 bg-white font-medium px-44 flex justify-between items-center shadow-lg  border-b">
            <Logo />
            <div className="flex items-center space-x-6 flex-grow">
               {location.pathname !== "/checkout" ? (
                  <Search />
               ) : (
                  <SearchPlaceholder />
               )}
               <div className="flex items-center space-x-1 hover:text-orange-600">
                  <Link to="/support">
                     <span>Help</span>
                  </Link>
               </div>

               {/* Lazy loading */}
               <div>
                  <div
                     onMouseEnter={() => setIsCartHovered(true)}
                     onMouseLeave={() => setIsCartHovered(false)}
                     className="flex items-center py-5 hover:text-orange-600 "
                  >
                     <Link
                        to="/checkout"
                        className={`flex items-center gap-1  ${
                           itemCount > 0 ? "text-green-500" : ""
                        } `}
                     >
                        <BsCartCheck size={30} />
                        Cart ({itemCount})
                     </Link>
                     {isCartHovered && <CartHoverCard />}
                  </div>
               </div>

               {isLoggedIn ? (
                  <button
                     onClick={Logout}
                     className="px-3 py-2 rounded text-white bg-black hover:text-orange-600"
                  >
                     Logout
                  </button>
               ) : (
                  <button
                     onClick={SignIn}
                     className="px-3 py-2 rounded text-white bg-black hover:text-orange-600"
                  >
                     Sign In
                  </button>
               )}
            </div>
         </header>
      </>
   );
}
