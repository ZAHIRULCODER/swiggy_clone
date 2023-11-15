import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import addressSlice from "../features/address/addressSlice";

const store = configureStore({
	reducer: {
		//name of slice: slice
		cart: cartSlice,
		address: addressSlice,
	},
});

export default store;
