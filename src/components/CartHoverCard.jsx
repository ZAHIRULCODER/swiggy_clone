import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartHoverCard = () => {
	const cartItems = useSelector((store) => store.cart.items);

	const calculateTotal = (items) =>
		items.reduce((acc, item) => acc + item?.price * item?.quantity, 0);

	return cartItems?.length === 0 ? (
		<div className="absolute right-[280px] mt-[250px] border-t-2 border-orange-600 p-2 w-80 bg-white  shadow-2xl z-10">
			<div className="px-4 py-3">
				<h3 className="text-2xl pb-6 font-bold text-gray-900">Cart Empty</h3>
				<p className="text-lg text-gray-500">
					Good food is always cooking! Go ahead, order some yummy items from the
					menu.
				</p>
			</div>
		</div>
	) : (
		<div className="absolute right-[275px] mt-[460px] text-black border-t-2 border-orange-600 p-5 bg-white shadow-2xl z-10 w-[370px] ">
			<div className="text-lg font-bold mb-4">
				<h1>Your Items</h1>
			</div>
			<div className="mb-6 h-[200px] overflow-auto">
				{cartItems.map((item, index) => (
					<div
						key={index}
						className="flex justify-between items-center py-2 border-b">
						<span className="truncate text-sm">
							<span className="text-orange-600">{item?.quantity}x</span> {item?.name}
						</span>
						<span className="whitespace-nowrap">
							₹ {item?.price * item?.quantity}{" "}
						</span>
					</div>
				))}
			</div>
			<div className="flex justify-between items-center font-bold mb-4">
				<span>Sub total</span>
				<span>₹ {calculateTotal(cartItems).toFixed(2)}</span>
			</div>
			<Link to={"/checkout"}>
				<button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 w-full rounded">
					CHECKOUT
				</button>
			</Link>
		</div>
	);
};

export default CartHoverCard;
