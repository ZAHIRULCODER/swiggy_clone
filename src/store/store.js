import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import addressSlice from "../features/address/addressSlice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
		address: addressSlice,
	},
});

export default store;
