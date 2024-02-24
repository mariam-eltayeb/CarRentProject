import { createSlice } from "@reduxjs/toolkit";
import { fetchCar,deleteCarAction,getAllCarAction,addCarAction,updateCarAction } from "./carActions";


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
		builder.addCase(getAllCarAction.fulfilled, (state, action) => {
			state.car = action.payload;
		});
		builder.addCase(deleteCarAction.fulfilled, (state, action) => {
			state.car = state.car.filter(car=> car.id !== action.payload);
		});
		builder.addCase(addCarAction.fulfilled, (state, action) => {
			 state.car.push(action.payload);
		});
		builder.addCase(updateCarAction.fulfilled, (state, action) => {
			console.log(action.payload.id)
			const filteredCar = state.car.findIndex(car=>car.id==action.payload.id)
			console.log(filteredCar)
			state.car[filteredCar] =action.payload;
		});
	
	},
});

export default carSlice.reducer;

export const { reset } = carSlice.actions;
