import { createSlice, current } from "@reduxjs/toolkit";
import { CandidateType, ProgramProviderType } from "../../../types";
import { programProviderLogin, programProviderSignup } from "..";

type initialProps = CandidateType & {
	isLoggedIn: boolean;
};

const initialState: initialProps = {
	candidateID: "",
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	nationality: "",
	currentlyBased: "",
	nationalIDNumber: "",
	dateOfBirth: "",
	gender: "",
	education: "",
	experience: "",
	resume: "",
	userToken: "",
	isLoggedIn: false,
};

const candidateSlice = createSlice({
	name: "candidate",
	initialState,
	reducers: {
		signout: () => {
			// deliberately left empty
		},
	},
	extraReducers: (builder) => {
		// builder;
		// .addCase(programProviderLogin.fulfilled, (state) => {
		// 	state.isLoggedIn = true;
		// })
		// .addCase(programProviderSignup.fulfilled, (state) => {
		// 	state.isLoggedIn = true;
		// });
	},
});

export const {} = candidateSlice.actions;

export default candidateSlice.reducer;
