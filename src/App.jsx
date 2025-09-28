import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import HelpSupport from "./pages/HelpSupport";
import { Error } from "./components/Error";
import { Outlet, createBrowserRouter } from "react-router-dom";
import RestaurantProvider from "./context/RestaurantProvider";
import RestaurantDetail from "./pages/RestaurantDetail";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./store/store";
import PaymentSuccessful from "./pages/PaymentSuccessful";

const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
   return (
      <Provider store={store}>
         <RestaurantProvider>
            <Toaster
               position="top-right"
               toastOptions={{
                  className:
                     "rounded-2xl border border-slate-200/60 bg-white/90 text-slate-900 shadow-xl shadow-slate-900/10 backdrop-blur",
               }}
            />
            <div className="app-shell">
               <Header />
               <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8">
                  <Outlet />
               </main>
               <Footer />
            </div>
         </RestaurantProvider>
      </Provider>
   );
}

export default App;

export const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <Error />,

      children: [
         { path: "/", element: <Home /> },
         { path: "/support", element: <HelpSupport /> },
         { path: "/restaurants/:resId", element: <RestaurantDetail /> },
         {
            path: "/checkout",
            element: (
               <Suspense>
                  <Checkout />
               </Suspense>
            ),
         },
         { path: "/paymentsuccessful", element: <PaymentSuccessful /> },
      ],
   },
]);
