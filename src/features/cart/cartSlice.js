import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		//add to cart is an action rest is reducer function. state is the initialState and actionpayload is the data which is comming in. (This function does not return anything. It just updates the state directly).
		addToCart: (state, action) => {
			state.items.push(action.payload);
		},
		removeFromCart: (state, action) => {
			let foundItem = false; // This flag will help us track if we've removed an item

			state.items = state.items.reduce((acc, currItem) => {
				//accumulator will be our new array
				// currItem is the current item in the array we're looking at

				if (!foundItem && currItem.id === action.payload.id) {
					// If we haven't removed an currItem yet, and the current item's id matches
					// the id we want to remove, we set found to true and skip adding this item to accumulator

					foundItem = true;
					return acc;
				}

				// If the current item's id doesn't match, or we already removed an item,
				// we add this item to accumulator
				return [...acc, currItem];
			}, []); // [] is the initial value for accumulator, starting as an empty array
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions; //it will export all the actions which are in the reducers

export default cartSlice.reducer; //it will combine all reducers so it will be reducer not reducers













/** 
Behind the scenes I guess

createSlice = {
	actions: {
		addToCart,
		removeFromCart,
		clearCart,
	},
	reducer: reducers,
};

*/
