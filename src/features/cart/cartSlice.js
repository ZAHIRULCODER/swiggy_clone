import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		itemCount: 0,
	},
	reducers: {
		//add to cart is an action rest is reducer function. state is the initialState and actionpayload is the data which is comming in. (This function does not return anything. It just updates the state directly).
		addToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...newItem, quantity: 1 });
			}
			state.itemCount += 1; // Increment total item count
		},
		removeFromCart: (state, action) => {
			const itemIdToRemove = action.payload.id;

			// Find the index of the item to be removed in the cart
			const itemIndex = state.items.findIndex(
				(item) => item.id === itemIdToRemove
			);

			// If the item is in the cart
			if (itemIndex !== -1) {
				const removedItem = state.items[itemIndex];

				// If the item has more than 1 quantity, decrease the quantity
				if (removedItem.quantity > 1) {
					removedItem.quantity -= 1;
				} else {
					// If the item has only 1 quantity, remove it from the cart
					state.items.splice(itemIndex, 1);
				}
				state.itemCount -= 1;
			}
		},
		clearCart: (state) => {
			state.items = [];
			state.itemCount = 0;
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
