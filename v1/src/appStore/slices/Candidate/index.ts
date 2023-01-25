<<<<<<< HEAD
export default {};
=======
import { createSlice } from "@reduxjs/toolkit";
import { CandidateType } from "../../../types";
import { candidateLogin, candidateSignup, getAllCandidates, getCandidateByID } from "..";

type initialProps = CandidateType & {
	isLoggedIn: boolean;
};

const initialState: {
	loggedInCandidate: initialProps | null;
	allCandidates: CandidateType[];
	currentCandidate: CandidateType | null;
} = {
	loggedInCandidate: null,
	allCandidates: [],
	currentCandidate: null,
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
		builder
			.addCase(candidateLogin.fulfilled, (state, action) => {
				state.loggedInCandidate = { ...(action.payload as unknown as CandidateType), isLoggedIn: true };
			})
			.addCase(candidateSignup.fulfilled, (state, action) => {
				state.loggedInCandidate = { ...(action.payload as unknown as CandidateType), isLoggedIn: true };
			})
			.addCase(getCandidateByID.fulfilled, (state, action) => {
				state.currentCandidate = action.payload;
			})
			.addCase(getAllCandidates.fulfilled, (state, action) => {
				state.allCandidates = action.payload;
			});
	},
});

export const {} = candidateSlice.actions;

export default candidateSlice.reducer;
>>>>>>> 6a262b1df297dc43cc9326d7599ee40f3e5cc0bf
