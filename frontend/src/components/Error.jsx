import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
	const error = useRouteError();
	const { status, statusText } = error;
	
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="bg-black text-white p-4 rounded-md">
				<p className="text-6xl">
					{statusText} : {status}
				</p>
			</div>
		</div>
	);
};

export default Error;
