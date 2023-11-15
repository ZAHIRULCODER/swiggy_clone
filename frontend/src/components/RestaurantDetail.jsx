import React from "react";
import { useParams } from "react-router-dom";
import { FaClock, FaStar } from "react-icons/fa";
import ShimmerUI from "./ShimmerUI";
import { useRestaurantDetailFetch } from "../hooks/useRestaurantDetailFetch";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const RestaurantDetail = () => {
	const { resId } = useParams();

	//custom hook to fetch all restaurantDetails and recommended section
	const { restaurantDetails, recommended } = useRestaurantDetailFetch(resId);

	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		const itemToAdd = {
			id: item?.id,
			name: item?.name,
			price: item?.price / 100 || item.defaultPrice / 100,
		};
		dispatch(addToCart(itemToAdd));
	};

	const handleRemoveItem = (item) => {
		const itemToRemove = {
			id: item?.id,
		};
		dispatch(removeFromCart(itemToRemove));
	};

	if (!restaurantDetails) return null;

	return (restaurantDetails?.length || recommended?.length) === 0 ? (
		<ShimmerUI />
	) : (
		<div className="flex justify-center mt-10 ">
			<div className="bg-white p-4 border w-[800px]">
				<h1 className="text-xl font-bold">{restaurantDetails?.name}</h1>
				<p className="text-gray-500">
					{restaurantDetails?.cuisines?.join(", ")}
				</p>
				<div className="flex justify-between  ">
					<div className="text-gray-700">
						<span>
							{restaurantDetails?.areaName},{" "}
							{restaurantDetails?.sla?.lastMileTravelString}{" "}
						</span>
					</div>
					<div className="max-w-xs  rounded overflow-hidden shadow-lg bg-white p-4 -mt-10">
						<div className="flex items-center">
							<FaStar className="text-green-500" />
							<span className="text-green-500 font-bold text-sm ml-2">
								{restaurantDetails?.avgRatingString}
							</span>
						</div>
						<div className="text-gray-700 text-sm mt-2">
							{restaurantDetails?.totalRatingsString}
						</div>
					</div>
				</div>
				{restaurantDetails?.feeDetails?.message && (
					<div className="flex gap-2 ">
						<img
							src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
							alt=""
						/>
						<span>{restaurantDetails?.feeDetails?.message}</span>
					</div>
				)}

				<div className="flex gap-5 items-center border-t border-gray-300 my-5 font-extrabold">
					<div className="text-gray-700 my-5 flex items-center">
						<FaClock className="mr-2" />
						<span>{restaurantDetails?.sla?.slaString}</span>
					</div>
					<div className="text-gray-700">
						<span>{restaurantDetails?.costForTwoMessage}</span>
					</div>
				</div>

				{/* {RECOMMENDED Section Starts here} */}
				<div className="bg-white pt-6 pb-8 mb-4">
					<div className="mb-4">
						<h1 className="text-green-600 font-bold uppercase underline tracking-wide">
							MENU
						</h1>
					</div>

					{recommended?.slice(1, 15)?.map((item) =>
						item?.card?.card?.itemCards?.map((itemCard) => (
							<div
								key={itemCard?.card?.info?.id}
								className="flex justify-between items-center py-2 border-b-2">
								<div className="flex items-center">
									<span className="ml-3 font-medium">
										{itemCard?.card?.info?.name}
									</span>
								</div>
								<div className="flex items-center">
									<span className="text-gray-900 mr-3">
										₹
										{(itemCard?.card?.info?.price ||
											itemCard?.card?.info?.defaultPrice) / 100}
									</span>
									<button
										onClick={() => handleAddItem(itemCard?.card?.info)}
										className="bg-gray-200 mr-2 text-green-600 hover:bg-gray-300 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
										ADD
									</button>
									<button
										onClick={() => handleRemoveItem(itemCard?.card?.info)}
										className="bg-gray-200 text-red-600 hover:bg-gray-300 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
										REMOVE
									</button>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default RestaurantDetail;
