import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSummary from "./CheckoutSummary";

const Checkout = () => {
	
	const cartItems = useSelector((store) => store.cart.items);

	return cartItems?.length === 0 ? (
		<div className="flex justify-center items-center h-[78vh]">
			<div className="w-[300px] text-center">
				<img src="https://cdn.dineorder.com/public/asset/img/cook.png" />
				<p className="text-lg font-bold"> Your cart is empty</p>
				<p> You can go to home page to view more restaurants</p>
				<Link to="/">
					<button className="bg-orange-600 text-white px-6 py-2  mt-7 hover:shadow-2xl">
						SEE RESTAURANTS
					</button>
				</Link>
			</div>
		</div>
	) : (
		<div >
			<CheckoutSummary />
		</div>
	);
};

export default Checkout;
