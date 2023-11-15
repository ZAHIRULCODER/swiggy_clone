import React from 'react'

const Spinner = () => {
  return (
		<div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
			<div class="spinner">
				<div class="text-white">Payment Processing...</div>
			</div>
		</div>
	);
}

export default Spinner
