import React from "react";
import { IMG_CDN_URL } from "../constant";
import { FaStar } from "react-icons/fa";

const RestaurantCard = ({
	name,
	avgRatingString,
	sla,
	cuisines,
	areaName,
	cloudinaryImageId,
	aggregatedDiscountInfoV3,
}) => {
	return (
		<div className="flex justify-center items-center gap-4 m-6 flex-wrap ">
			<div className=" hover:scale-110 transition-transform duration-300 ease-in-out w-[270px] ">
				<div className="relative">
					<img
						src={IMG_CDN_URL + cloudinaryImageId}
						alt={`Image of ${name}`}
						className="h-[180px] block w-full rounded-2xl object-cover shadow-2xl shadow-gray-400/50"
					/>
					{aggregatedDiscountInfoV3 && (
						<div className="absolute bottom-0 rounded-b-2xl w-full bg-black bg-opacity-50 text-white p-1">
							<p className="text-lg font-extrabold pl-2">
								{aggregatedDiscountInfoV3?.header}{" "}
								{aggregatedDiscountInfoV3?.subHeader}
							</p>
						</div>
					)}
				</div>
				<div className="mt-2.5 text-gray-700">
					<h3 className="truncate mt-2.5 text-lg ml-2 font-bold">{name}</h3>
					<h4 className="text-md ml-2 my-1.5 flex items-center">
						<FaStar color="green" className="mr-1 " />
						<span className="font-bold">{avgRatingString}</span>
						<span className="mx-1 font-bold">•</span>
						<span className="font-bold">{sla?.slaString}</span>
					</h4>
					<p className="truncate text-gray-600 ml-2 text-base ">
						{cuisines?.join(", ")} <br />
						{areaName}
					</p>
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
