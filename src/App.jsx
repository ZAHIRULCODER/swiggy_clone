import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import HelpSupport from "./components/HelpSupport";
import Error from "./components/Error";
import { Outlet, createBrowserRouter } from "react-router-dom";
import RestaurantProvider from "./context/RestaurantProvider";
import RestaurantDetail from "./components/RestaurantDetail";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./store/store";
import PaymentSuccessful from "./components/PaymentSuccessful";

/**
Chunking
Code Splitting
Dynamic Bundling
Lazy Loading
On Demand Loading
//Dynamic Import
*/
const Checkout = lazy(() => import("./components/Checkout"));

const App = () => {
	return (
		<Provider store={store}>
			<RestaurantProvider>
				<Toaster />
				<Header />
				<div className="mt-20">
					<Outlet />
				</div>
				<Footer />
			</RestaurantProvider>
		</Provider>
	);
};

export default App;

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,

		children: [
			{ path: "/", element: <Body /> },
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
