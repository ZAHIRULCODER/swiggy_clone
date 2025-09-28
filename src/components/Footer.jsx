import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
   return (
      <footer className="border-t border-slate-200/60 bg-white/70 backdrop-blur">
         <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
               <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                  Crafted by Zahirul
               </p>
               <p className="mt-2 text-lg font-semibold text-slate-900">
                  © {new Date().getFullYear()} Rapid Eats. All rights reserved.
               </p>
               <p className="mt-2 max-w-xl text-sm text-slate-500">
                  Built as a modern Swiggy experience with a focus on delightful
                  interactions, accessibility, and polished performance.
               </p>
            </div>

            <div className="flex items-center gap-4">
               <a
                  href="https://www.linkedin.com/in/sk-zahirul-islam-823a73270/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-sm transition hover:border-orange-200 hover:text-orange-500"
               >
                  <FaLinkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
               </a>
               <a
                  href="https://github.com/ZAHIRULCODER"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-sm transition hover:border-orange-200 hover:text-orange-500"
               >
                  <FaGithub size={18} />
                  <span className="sr-only">GitHub</span>
               </a>
            </div>
         </div>
      </footer>
   );
}
