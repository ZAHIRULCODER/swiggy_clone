import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { useAuth } from "../hooks/useAuth";
import { useLocation, Link } from "react-router-dom";
import { Search } from "./Search";
import brandLogo from "../assets/brand.png";
import { CartHoverCard } from "./CartHoverCard";
import { useSelector } from "react-redux";

const navLinks = [
   { label: "Home", to: "/" },
   { label: "Help", to: "/support" },
];

const Logo = () => (
   <Link to="/" className="group inline-flex items-center gap-2">
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white text-sm font-semibold shadow-lg ring-1 ring-slate-200 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-xl">
         <img
            src={brandLogo}
            alt="Swiggy clone"
            className="h-9 w-9 object-contain"
         />
      </span>
      <div className="flex flex-col">
         <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
            Rapid Eats
         </span>
         <span className="text-lg font-semibold text-slate-900">
            Swifty Bites
         </span>
      </div>
   </Link>
);

export function Header() {
   const { isLoggedIn, SignIn, Logout } = useAuth();
   const [isCartHovered, setIsCartHovered] = useState(false);
   const location = useLocation();
   const itemCount = useSelector((store) => store.cart.itemCount);

   const displaySearch = location.pathname !== "/checkout";

   return (
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
         <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
            <Logo />

            <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
               {navLinks.map(({ label, to }) => (
                  <Link
                     key={label}
                     to={to}
                     className="group relative transition-colors duration-200 hover:text-orange-500"
                  >
                     {label}
                     <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-orange-500 transition-transform duration-200 group-hover:scale-x-100" />
                  </Link>
               ))}
            </nav>

            <div className="flex flex-1 items-center justify-end gap-4">
               {displaySearch && (
                  <div className="hidden max-w-sm flex-1 md:block">
                     <Search />
                  </div>
               )}

               <Link
                  to="/support"
                  className="hidden items-center gap-2 rounded-full border border-slate-200/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-orange-200 hover:text-orange-500 md:inline-flex"
               >
                  Support
               </Link>

               <div
                  className="relative"
                  onMouseEnter={() => setIsCartHovered(true)}
                  onMouseLeave={() => setIsCartHovered(false)}
               >
                  <Link
                     to="/checkout"
                     className="group inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:border-orange-300 hover:bg-orange-100"
                  >
                     <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30 transition group-hover:-translate-y-0.5 group-hover:shadow-xl">
                        <BsCartCheck size={18} />
                     </span>
                     Cart
                     <span className="inline-flex min-w-[1.75rem] items-center justify-center rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-orange-600 shadow-sm">
                        {itemCount}
                     </span>
                  </Link>
                  {isCartHovered && <CartHoverCard />}
               </div>

               {isLoggedIn ? (
                  <button
                     onClick={Logout}
                     className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                  >
                     Logout
                  </button>
               ) : (
                  <button
                     onClick={SignIn}
                     className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                  >
                     Sign In
                  </button>
               )}
            </div>
         </div>

         {displaySearch && (
            <div className="mx-auto w-full max-w-6xl px-4 pb-4 md:hidden">
               <Search />
            </div>
         )}
      </header>
   );
}
