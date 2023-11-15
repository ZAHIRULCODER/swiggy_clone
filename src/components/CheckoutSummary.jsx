import React from "react";
import AddAdress from "./AddAdress";
import { useSelector } from "react-redux";
import BillDetailsCard from "./BillDetailsCard";

const CheckoutSummary = () => {
	

	return (
		<>
			<div className="flex justify-between">
				{/* Left */}
				<AddAdress />

				{/* Right */}
				<BillDetailsCard />
			</div>
		</>
	);
};

export default CheckoutSummary;
