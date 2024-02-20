import { createSlice } from "@reduxjs/toolkit";
import { fetchCar } from "./carActions";

const initialState = {
	car: [],
	loading: false,
	error: null,
	errorMessage: null,
};

const carSlice = createSlice({
	name: "car",
	initialState,
	reducers: {
		reset: state => initialState,
	},
	extraReducers: builder => {
		builder.addCase(fetchCar.fulfilled, (state, action) => {
			state.car = action.payload;
		});
		builder.addCase(fetchCar.pending, state => {
			state.loading = true;
		});
		builder.addCase(fetchCar.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error;
			state.errorMessage = action.payload;
		});
	},
});

export default carSlice.reducer;

export const { reset } = carSlice.actions;