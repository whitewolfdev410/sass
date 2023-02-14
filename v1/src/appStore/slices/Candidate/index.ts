import { createSlice } from "@reduxjs/toolkit";
import {
	CandidateApplicationFormType,
	CandidateAppStatusType,
	CandidateType,
} from "../../../types";
import {
	candidateSignup,
	getAllCandidates,
	getCandidateByID,
	getApplicationStatus,
	getCandidateAppForm,
} from "..";

type initialProps = CandidateType & {
	isLoggedIn: boolean;
};

const initialState: {
	loggedInCandidate: initialProps | null;
	allCandidates: CandidateType[];
	currentCandidate: CandidateType | null;
	applicationStatus: CandidateAppStatusType;
	applicationForm: CandidateApplicationFormType;
} = {
	loggedInCandidate: null,
	allCandidates: [],
	currentCandidate: null,
	applicationStatus: {} as CandidateAppStatusType,
	applicationForm: {} as CandidateApplicationFormType,
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
			})
			.addCase(getCandidateAppForm.fulfilled, (state, action) => {
				state.applicationForm = action.payload;
			});
	},
});

export const {} = candidateSlice.actions;

export default candidateSlice.reducer;
