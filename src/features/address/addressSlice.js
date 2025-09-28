import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
   name: "address",
   initialState: {
      value: {
         name: "",
         line1: "",
         floor: "",
         city: "",
         state: "",
         zip: "",
      },
      submitted: false,
   },
   reducers: {
      setAddress: (state, action) => {
         const { field, value } = action.payload;
         state.value[field] = value;
      },

      setSubmitted: (state, action) => {
         state.submitted = action.payload;
      },
      editAddress: (state) => {
         state.submitted = false;
      },
   },
});

export const { setAddress, editAddress, setSubmitted } = addressSlice.actions;

export default addressSlice.reducer;
