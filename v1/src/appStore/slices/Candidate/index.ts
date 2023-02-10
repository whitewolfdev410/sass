import { createSlice } from "@reduxjs/toolkit";
import { CandidateAppStatusType, CandidateType } from "../../../types";
import {
	candidateLogin,
	candidateSignup,
	getAllCandidates,
	getCandidateByID,
	getApplicationStatus,
} from "..";

type initialProps = CandidateType & {
	isLoggedIn: boolean;
};

const initialState: {
	loggedInCandidate: initialProps | null;
	allCandidates: CandidateType[];
	currentCandidate: CandidateType | null;
	applicationStatus: CandidateAppStatusType;
} = {
	loggedInCandidate: null,
	allCandidates: [],
	currentCandidate: null,
	applicationStatus: {} as CandidateAppStatusType,
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
				state.loggedInCandidate = {
					...(action.payload as unknown as CandidateType),
					isLoggedIn: true,
				};
			})
			.addCase(candidateSignup.fulfilled, (state, action) => {
				state.loggedInCandidate = {
					...(action.payload as unknown as CandidateType),
					isLoggedIn: true,
				};
			})
			.addCase(getCandidateByID.fulfilled, (state, action) => {
				state.currentCandidate = action.payload;
			})
			.addCase(getAllCandidates.fulfilled, (state, action) => {
				state.allCandidates = action.payload;
			})
			.addCase(getApplicationStatus.fulfilled, (state, action) => {
				state.applicationStatus = action.payload;
			});
	},
});

export const {} = candidateSlice.actions;

export default candidateSlice.reducer;
