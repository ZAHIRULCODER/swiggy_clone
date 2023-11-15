import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import Spinner from "./Spinner";

const BillDetailsCard = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const address = useSelector((store) => store.address.value);
	const submitted = useSelector((store) => store.address.submitted);
	const [showSpinner, setShowSpinner] = useState(false);

	const dispatch = useDispatch();

	const calculateTotal = (items) =>
		items.reduce((acc, item) => acc + item?.price, 0);

	const handlePayment = () => {
		if (!submitted || address?.length === 0) {
			toast.error("Please add shipping address first");
		} else {
			setShowSpinner(true);
			setTimeout(() => {
				setShowSpinner(false);
				toast.success("Payment Successful");
				window.location.href = "/paymentsuccessful";
			}, 2000);
		}
	};

	return (
		<div className="text-center p-10">
			<div className=" p-5 w-[370px] h-[420px] border rounded text-center ">
				<div className="text-lg font-bold mb-4 flex justify-between">
					<h1>Bill Details</h1>
					<button
						onClick={() => dispatch(clearCart())}
						className="bg-red-500 hover:bg-red-800 rounded text-base text-white p-2">
						Clear All
					</button>
				</div>
				<div className="mb-6 h-[200px] overflow-auto">
					{cartItems.map((item, index) => (
						<div
							key={index}
							className="flex justify-between items-center py-2 border-b">
							<span className="truncate text-sm">{item?.name}</span>
							<span className="whitespace-nowrap">₹ {item?.price}</span>
						</div>
					))}
				</div>
				<div className="flex justify-between items-center font-bold mb-4">
					<span>Sub total</span>
					<span>₹ {calculateTotal(cartItems).toFixed(2)}</span>
				</div>

				<button
					onClick={handlePayment}
					className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 w-full rounded">
					PAY
				</button>
			</div>
			{showSpinner && <Spinner />}
		</div>
	);
};

export default BillDetailsCard;
