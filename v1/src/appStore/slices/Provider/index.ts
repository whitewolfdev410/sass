import { createSlice, current } from "@reduxjs/toolkit";
import { ProgramProviderType } from "../../../types";
import { programProviderLogin, programProviderSignup } from "..";

type initialProps = ProgramProviderType & {
	isLoggedIn: boolean;
};

const initialState: initialProps = {
	programProviderID: 0,
	firstName: "",
	lastName: "",
	email: "",
	jobTitle: "",
	phoneNumber: "",
	userToken: "",
	isLoggedIn: false,
};

const programProviderSlice = createSlice({
	name: "programProvider",
	initialState,
	reducers: {
		signout: () => {
			// deliberately left empty
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(programProviderLogin.fulfilled, (state) => {
				state.isLoggedIn = true;
			})
			.addCase(programProviderSignup.fulfilled, (state) => {
				state.isLoggedIn = true;
			});
	},
});

export const { signout } = programProviderSlice.actions;

export default programProviderSlice.reducer;
