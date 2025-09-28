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
            <Toaster />
            <Header />
            <div className="mt-20 min-h-[calc(100vh-5rem)] flex flex-col">
               <div className="flex-grow">
                  <Outlet />
               </div>
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
